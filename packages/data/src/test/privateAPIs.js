/**
 * Internal dependencies
 */
import { createRegistry } from '../registry';
import createReduxStore from '../redux-store';
import { unlock } from '../experiments';

/**
 * WordPress dependencies
 */

beforeEach( () => {
	jest.useFakeTimers( 'legacy' );
} );

afterEach( () => {
	jest.runOnlyPendingTimers();
	jest.useRealTimers();
} );

describe( 'Private data APIs', () => {
	let registry;

	beforeEach( () => {
		registry = createRegistry();
	} );

	function getPublicPrice( state ) {
		return state.price;
	}
	function getSecretDiscount( state ) {
		return state.secretDiscount;
	}
	function setSecretDiscount( price ) {
		return { type: 'SET_PRIVATE_PRICE', price };
	}

	function setPublicPrice( price ) {
		return { type: 'SET_PUBLIC_PRICE', price };
	}
	function createStore() {
		const groceryStore = createReduxStore( 'grocer', {
			selectors: {
				getPublicPrice,
				getState: ( state ) => state,
			},
			actions: { setPublicPrice },
			reducer: ( state, action ) => {
				if ( action?.type === 'SET_PRIVATE_PRICE' ) {
					return {
						...state,
						secretDiscount: action?.price,
					};
				} else if ( action?.type === 'SET_PUBLIC_PRICE' ) {
					return {
						...state,
						price: action?.price,
					};
				}
				return {
					price: 1000,
					secretDiscount: 800,
					...( state || {} ),
				};
			},
		} );
		registry.register( groceryStore );
		return groceryStore;
	}

	describe( 'private selectors', () => {
		it( 'should expose public selectors by default', () => {
			const groceryStore = createStore();
			unlock( groceryStore ).registerPrivateSelectors( groceryStore, {
				getSecretDiscount,
			} );

			const publicSelectors = registry.select( groceryStore );
			expect( publicSelectors.getPublicPrice ).toEqual(
				expect.any( Function )
			);
		} );

		it( 'should not expose private selectors by default', () => {
			const groceryStore = createStore();
			unlock( groceryStore ).registerPrivateSelectors( {
				getSecretDiscount,
			} );

			const publicSelectors = registry.select( groceryStore );
			expect( publicSelectors.getSecretDiscount ).toEqual( undefined );
		} );

		it( 'should make private selectors available via unlock()', () => {
			const groceryStore = createStore();
			unlock( groceryStore ).registerPrivateSelectors( {
				getSecretDiscount,
			} );

			const privateSelectors = unlock( registry.select( groceryStore ) );
			expect( privateSelectors.getSecretDiscount ).toEqual(
				expect.any( Function )
			);
			// The public selector is still accessible:
			expect( privateSelectors.getPublicPrice ).toEqual(
				expect.any( Function )
			);
		} );

		it( 'should give private selectors access to the state', () => {
			const groceryStore = createStore();
			unlock( groceryStore ).registerPrivateSelectors( {
				getSecretDiscount,
			} );

			const privateSelectors = unlock( registry.select( groceryStore ) );
			expect( privateSelectors.getSecretDiscount() ).toEqual( 800 );
		} );

		it( 'should support public selectors accessed via unlock()', () => {
			const groceryStore = createStore();
			unlock( groceryStore ).registerPrivateSelectors( {
				getSecretDiscount,
			} );

			const unlockedSelectors = unlock( registry.select( groceryStore ) );
			expect( unlockedSelectors.getPublicPrice() ).toEqual( 1000 );
		} );
	} );

	describe( 'private actions', () => {
		it( 'should expose public actions by default', () => {
			const groceryStore = createStore();
			unlock( groceryStore ).registerPrivateActions( groceryStore, {
				setSecretDiscount,
			} );
			const publicActions = registry.dispatch( groceryStore );
			expect( publicActions.setPublicPrice ).toEqual(
				expect.any( Function )
			);
		} );

		it( 'should not expose private actions by default', () => {
			const groceryStore = createStore();
			unlock( groceryStore ).registerPrivateActions( {
				setSecretDiscount,
			} );
			const publicActions = registry.dispatch( groceryStore );
			expect( publicActions.setSecretDiscount ).toEqual( undefined );
		} );

		it( 'should make private actions available via unlock)', () => {
			const groceryStore = createStore();
			unlock( groceryStore ).registerPrivateActions( {
				setSecretDiscount,
			} );
			const privateActions = unlock( registry.dispatch( groceryStore ) );
			expect( privateActions.setSecretDiscount ).toEqual(
				expect.any( Function )
			);
			// The public action is still accessible:
			expect( privateActions.setPublicPrice ).toEqual(
				expect.any( Function )
			);
		} );

		it( 'should work with both private actions and private selectors at the same time', () => {
			const groceryStore = createStore();
			unlock( groceryStore ).registerPrivateActions( {
				setSecretDiscount,
			} );
			unlock( groceryStore ).registerPrivateSelectors( {
				getSecretDiscount,
			} );
			const privateActions = unlock( registry.dispatch( groceryStore ) );
			const privateSelectors = unlock( registry.select( groceryStore ) );
			expect( privateActions.setSecretDiscount ).toEqual(
				expect.any( Function )
			);
			expect( privateSelectors.getSecretDiscount ).toEqual(
				expect.any( Function )
			);
		} );

		it( 'should dispatch private actions like regular actions', () => {
			const groceryStore = createStore();
			unlock( groceryStore ).registerPrivateActions( {
				setSecretDiscount,
			} );
			const privateActions = unlock( registry.dispatch( groceryStore ) );
			privateActions.setSecretDiscount( 400 );
			expect(
				registry.select( groceryStore ).getState().secretDiscount
			).toEqual( 400 );
		} );

		it( 'should dispatch public actions on the unlocked store', () => {
			const groceryStore = createStore();
			unlock( groceryStore ).registerPrivateActions( {
				setSecretDiscount,
			} );
			const privateActions = unlock( registry.dispatch( groceryStore ) );
			privateActions.setPublicPrice( 400 );
			expect( registry.select( groceryStore ).getState().price ).toEqual(
				400
			);
		} );

		it( 'should dispatch private action thunks like regular actions', () => {
			const groceryStore = createStore();
			unlock( groceryStore ).registerPrivateActions( {
				setSecretDiscountThunk:
					( price ) =>
					( { dispatch } ) => {
						dispatch( { type: 'SET_PRIVATE_PRICE', price } );
					},
			} );
			unlock( groceryStore ).registerPrivateSelectors( {
				getSecretDiscount,
			} );
			const privateActions = unlock( registry.dispatch( groceryStore ) );
			privateActions.setSecretDiscountThunk( 100 );
			expect(
				unlock( registry.select( groceryStore ) ).getSecretDiscount()
			).toEqual( 100 );
		} );
	} );
} );

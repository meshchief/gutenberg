/**
 * WordPress dependencies
 */
import {
	__experimentalOffCanvasEditor as OffCanvasEditor,
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalHStack as HStack,
	__experimentalHeading as Heading,
	Spinner,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import NavigationMenuSelector from './navigation-menu-selector';
import { LeafMoreMenu } from '../leaf-more-menu';

/* translators: %s: The name of a menu. */
const actionLabel = __( "Switch to '%s'" );

const MainContent = ( {
	clientId,
	currentMenuId,
	isLoading,
	isNavigationMenuMissing,
} ) => {
	// Provide a hierarchy of clientIds for the given Navigation block (clientId).
	// This is required else the list view will display the entire block tree.
	const clientIdsTree = useSelect(
		( select ) => {
			const { __unstableGetClientIdsTree } = select( blockEditorStore );
			return __unstableGetClientIdsTree( clientId );
		},
		[ clientId ]
	);

	if ( currentMenuId && isNavigationMenuMissing ) {
		return <p>{ __( 'Select or create a menu' ) }</p>;
	}

	if ( isLoading ) {
		return <Spinner />;
	}

	return (
		<OffCanvasEditor
			blocks={ clientIdsTree }
			isExpanded={ true }
			selectBlockInCanvas={ false }
			LeafMoreMenu={ LeafMoreMenu }
		/>
	);
};

const Controls = ( props ) => {
	const {
		createNavigationMenuIsSuccess,
		createNavigationMenuIsError,
		currentMenuId = null,
		onCreateNew,
		onSelectClassicMenu,
		onSelectNavigationMenu,
	} = props;

	return (
		<>
			<HStack className="wp-block-navigation-off-canvas-editor__header">
				<Heading
					className="wp-block-navigation-off-canvas-editor__title"
					level={ 2 }
				>
					{ __( 'Menu' ) }
				</Heading>
				<NavigationMenuSelector
					currentMenuId={ currentMenuId }
					onSelectClassicMenu={ onSelectClassicMenu }
					onSelectNavigationMenu={ onSelectNavigationMenu }
					onCreateNew={ onCreateNew }
					createNavigationMenuIsSuccess={
						createNavigationMenuIsSuccess
					}
					createNavigationMenuIsError={ createNavigationMenuIsError }
					actionLabel={ actionLabel }
				/>
			</HStack>
			<MainContent { ...props } />
		</>
	);
};

const MenuInspectorControls = ( props ) => {
	const menuControlsSlot = window?.__experimentalEnableBlockInspectorTabs
		? 'list'
		: undefined;

	return (
		<InspectorControls __experimentalGroup={ menuControlsSlot }>
			<PanelBody>
				<Controls { ...props } />
			</PanelBody>
		</InspectorControls>
	);
};

export default MenuInspectorControls;

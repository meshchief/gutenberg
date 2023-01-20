/**
 * WordPress dependencies
 */
import { useDispatch } from '@wordpress/data';
import { useEffect, useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import withRegistryProvider from './with-registry-provider';
import useBlockSync from './use-block-sync';
import { store as blockEditorStore } from '../../store';
import { BlockRefsProvider } from './block-refs-provider';

/** @typedef {import('@wordpress/data').WPDataRegistry} WPDataRegistry */

export const ExperimentalBlockEditorProvider = withRegistryProvider(
	( props ) => {
		const { children, settings } = props;

		const { updateSettings } = useDispatch( blockEditorStore );
		useEffect( () => {
			updateSettings( {
				...settings,
				__internalIsInitialized: true,
			} );
		}, [ settings ] );

		// Syncs the entity provider with changes in the block-editor store.
		useBlockSync( props );

		return <BlockRefsProvider>{ children }</BlockRefsProvider>;
	}
);

/**
 * The public BlockEditorProvider does not accept any experimental settings
 * introduced after WordPress 6.1. To use them, you need to rely on
 * ExperimentalBlockEditorProvider.
 *
 * @see https://github.com/WordPress/gutenberg/pull/46131
 */
const publicExperimentalSettingsFromBeforeWordPress62 = [
	'__experimentalBlockDirectory',
	'__experimentalDiscussionSettings',
	'__experimentalFeatures',
	'__experimentalPreferredStyleVariations',
	'__experimentalSetIsInserterOpened',
	'__unstableGalleryWithImageBlocks',
	'__experimentalReusableBlocks',
	'__experimentalBlockPatterns',
	'__experimentalBlockPatternCategories',
	'__experimentalAdditionalBlockPatterns',
	'__experimentalAdditionalBlockPatternCategories',
	'__experimentalFetchLinkSuggestions',
	'__unstableEnableFullSiteEditingBlocks',
	'__unstableIsBlockBasedTheme',
	'__unstableFetchMedia',
	'__experimentalFetchUrlData',
	'__experimentalFetchRichUrlData',
	'__experimentalCanUserUseUnfilteredHTML',
	'__experimentalUndo',
	'__experimentalCreatePageEntity',
	'__experimentalUserCanCreatePages',
	'__experimentalPreferPatternsOnRoot',
	'__unstableIsPreviewMode',
];
const BlockEditorProvider = ( props ) => {
	const cleanSettings = useMemo( () => {
		const clean = {};
		for ( const key in props.settings ) {
			if (
				key.startsWith( '__' ) &&
				! publicExperimentalSettingsFromBeforeWordPress62.includes(
					key
				)
			) {
				continue;
			}
			clean[ key ] = props.settings[ key ];
		}
		return clean;
	}, [ props.settings ] );
	return (
		<ExperimentalBlockEditorProvider
			{ ...props }
			settings={ cleanSettings }
		>
			{ props.children }
		</ExperimentalBlockEditorProvider>
	);
};

export default BlockEditorProvider;

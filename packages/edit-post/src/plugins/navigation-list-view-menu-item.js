/**
 * WordPress dependencies
 */
import {
	BlockEditorProvider,
	__unstableBlockToolbarLastItem,
	__unstableBlockNameContext,
} from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { listView } from '@wordpress/icons';

const NavMenuSidebarToggle = () => {
	// eslint-disable-next-line @wordpress/data-no-store-string-literals
	const { openGeneralSidebar } = useDispatch( 'core/edit-post' );

	return (
		<ToolbarGroup>
			<ToolbarButton
				className="components-toolbar__control"
				label={ __( 'Open navigation list view' ) }
				onClick={ () => openGeneralSidebar( 'edit-post/block' ) }
				icon={ listView }
			/>
		</ToolbarGroup>
	);
};

const NavigationEditMenuItem = () => {
	return (
		<BlockEditorProvider>
			<__unstableBlockToolbarLastItem>
				<__unstableBlockNameContext.Consumer>
					{ ( blockName ) =>
						blockName === 'core/navigation' && (
							<NavMenuSidebarToggle />
						)
					}
				</__unstableBlockNameContext.Consumer>
			</__unstableBlockToolbarLastItem>
		</BlockEditorProvider>
	);
};

export default NavigationEditMenuItem;

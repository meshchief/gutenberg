/**
 * WordPress dependencies
 */
import { useInstanceId } from '@wordpress/compose';
import { speak } from '@wordpress/a11y';
import { useSelect } from '@wordpress/data';
import { forwardRef, useState, useEffect } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../../store';
import Inserter from '../inserter';
import useBlockDisplayTitle from '../block-title/use-block-display-title';

export const Appender = forwardRef(
	( { nestingLevel, blockCount, ...props }, ref ) => {
		const [ insertedBlock, setInsertedBlock ] = useState( null );

		const instanceId = useInstanceId( Appender );
		const { hideInserter, clientId } = useSelect( ( select ) => {
			const {
				getTemplateLock,
				__unstableGetEditorMode,
				getSelectedBlockClientId,
			} = select( blockEditorStore );

			const _clientId = getSelectedBlockClientId();

			return {
				clientId: getSelectedBlockClientId(),
				hideInserter:
					!! getTemplateLock( _clientId ) ||
					__unstableGetEditorMode() === 'zoom-out',
			};
		}, [] );

		const insertedBlockTitle = useBlockDisplayTitle( {
			clientId: insertedBlock?.clientId,
			context: 'list-view',
		} );

		useEffect( () => {
			if ( ! insertedBlockTitle?.length ) {
				return;
			}

			speak(
				sprintf(
					// translators: %s: name of block being inserted (i.e. Paragraph, Image, Group etc)
					__( '%s block inserted' ),
					insertedBlockTitle
				),
				'assertive'
			);
		}, [ insertedBlockTitle ] );

		if ( hideInserter ) {
			return null;
		}

		const descriptionId = `off-canvas-editor-appender__${ instanceId }`;
		const description = sprintf(
			/* translators: 1: The numerical position of the block. 2: The level of nesting for the block. */
			__( 'Append at position %1$d, Level %2$d' ),
			blockCount + 1,
			nestingLevel
		);

		return (
			<div className="offcanvas-editor-appender">
				<Inserter
					ref={ ref }
					rootClientId={ clientId }
					position="bottom right"
					isAppender={ true }
					selectBlockOnInsert={ false }
					shouldDirectInsert={ false }
					__experimentalIsQuick
					{ ...props }
					toggleProps={ { 'aria-describedby': descriptionId } }
					onSelectOrClose={ ( maybeInsertedBlock ) => {
						if ( maybeInsertedBlock?.clientId ) {
							setInsertedBlock( maybeInsertedBlock );
						}
					} }
				/>
				<div
					className="offcanvas-editor-appender__description"
					id={ descriptionId }
				>
					{ description }
				</div>
			</div>
		);
	}
);

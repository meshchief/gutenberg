/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
import {
	ExternalLink,
	TextareaControl,
	Panel,
	PanelBody,
	Notice,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { transformStyles } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { useStyle } from './hooks';

function CustomCSSControl() {
	const [ customCSS, setCustomCSS ] = useStyle( 'css' );
	const [ themeCSS ] = useStyle( 'css', null, 'base' );
	const [ cssError, setCSSError ] = useState( null );
	const ignoreThemeCustomCSS = '/* IgnoreThemeCustomCSS */';

	// If there is custom css from theme.json show it in the edit box
	// so the user can selectively overwrite it, rather than have the user CSS
	// completely overwrite the theme CSS by default.
	const themeCustomCSS =
		! customCSS && themeCSS
			? `/* ${ __(
					'Theme Custom CSS start'
			  ) } */\n${ themeCSS }\n/* ${ __( 'Theme Custom CSS end' ) } */`
			: undefined;

	function handleOnChange( value ) {
		// If there is theme custom CSS, but the user clears the input box then save the
		// ignoreThemeCustomCSS string so that the theme custom CSS is not re-applied.
		if ( themeCSS && value === '' ) {
			setCustomCSS( ignoreThemeCustomCSS );
			return;
		}
		setCustomCSS( value );
		// TODO: transform it to find syntax error. Note that it will be transformed again
		// after applied to the preview frame. We should refactor this to prevent double-transform.
		const [ transformed ] = transformStyles(
			[ { css: value } ],
			'.editor-styles-wrapper'
		);
		setCSSError(
			transformed === null ? __( 'Error while parsing the CSS.' ) : null
		);
	}

	const originalThemeCustomCSS =
		themeCSS && customCSS && themeCustomCSS !== customCSS
			? themeCSS
			: undefined;

	return (
		<>
			<TextareaControl
				__nextHasNoMarginBottom
				value={
					customCSS?.replace( ignoreThemeCustomCSS, '' ) ||
					themeCustomCSS
				}
				onChange={ ( value ) => handleOnChange( value ) }
				rows={ 15 }
				className="edit-site-global-styles__custom-css-input"
				spellCheck={ false }
				help={
					<>
						<ExternalLink href="https://wordpress.org/support/article/css/">
							{ __( 'Learn more about CSS' ) }
						</ExternalLink>
					</>
				}
			/>
			{ cssError && (
				<Notice
					status="warning"
					onRemove={ () => setCSSError( null ) }
					politeness="polite"
				>
					{ cssError }
				</Notice>
			) }
			{ originalThemeCustomCSS && (
				<Panel>
					<PanelBody
						title={ __( 'Original Theme Custom CSS' ) }
						initialOpen={ false }
					>
						<pre className="edit-site-global-styles__custom-css-theme-css">
							{ originalThemeCustomCSS }
						</pre>
					</PanelBody>
				</Panel>
			) }
		</>
	);
}

export default CustomCSSControl;

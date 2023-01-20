/**
 * Internal dependencies
 */
import './hooks';

export { storeConfig, store } from './store';
export * from './components';
export * from './utils';

/*
 * Backward compatibility
 */
export { transformStyles } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { ExperimentalEditorProvider } from './components/provider';
import { lock } from './experiments';

export const experiments = {};
lock( experiments, {
	ExperimentalEditorProvider,
} );

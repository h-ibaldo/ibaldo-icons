import type { DefineComponent } from 'vue';

export interface StoreBrowserProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StoreBrowser: DefineComponent<StoreBrowserProps>;

export default StoreBrowser;
export { StoreBrowser };

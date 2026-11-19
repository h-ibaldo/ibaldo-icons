import type { DefineComponent } from 'vue';

export interface BrowserProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Browser: DefineComponent<BrowserProps>;

export default Browser;
export { Browser };

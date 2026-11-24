import type { DefineComponent } from 'vue';

export interface BrowserTrashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserTrash: DefineComponent<BrowserTrashProps>;

export default BrowserTrash;
export { BrowserTrash };

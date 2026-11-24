import type { DefineComponent } from 'vue';

export interface WindowSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSearch: DefineComponent<WindowSearchProps>;

export default WindowSearch;
export { WindowSearch };

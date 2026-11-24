import type { DefineComponent } from 'vue';

export interface BoxSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxSearch: DefineComponent<BoxSearchProps>;

export default BoxSearch;
export { BoxSearch };

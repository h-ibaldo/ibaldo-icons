import type { DefineComponent } from 'vue';

export interface BoxFrontSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxFrontSearch: DefineComponent<BoxFrontSearchProps>;

export default BoxFrontSearch;
export { BoxFrontSearch };

import type { DefineComponent } from 'vue';

export interface SwatchBookProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SwatchBook: DefineComponent<SwatchBookProps>;

export default SwatchBook;
export { SwatchBook };

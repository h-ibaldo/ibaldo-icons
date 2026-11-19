import type { DefineComponent } from 'vue';

export interface BoxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Box: DefineComponent<BoxProps>;

export default Box;
export { Box };

import type { DefineComponent } from 'vue';

export interface TouchTapDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchTapDouble: DefineComponent<TouchTapDoubleProps>;

export default TouchTapDouble;
export { TouchTapDouble };

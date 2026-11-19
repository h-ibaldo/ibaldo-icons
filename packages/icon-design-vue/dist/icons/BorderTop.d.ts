import type { DefineComponent } from 'vue';

export interface BorderTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BorderTop: DefineComponent<BorderTopProps>;

export default BorderTop;
export { BorderTop };

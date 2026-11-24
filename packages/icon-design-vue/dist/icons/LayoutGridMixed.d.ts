import type { DefineComponent } from 'vue';

export interface LayoutGridMixedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutGridMixed: DefineComponent<LayoutGridMixedProps>;

export default LayoutGridMixed;
export { LayoutGridMixed };

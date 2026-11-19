import type { DefineComponent } from 'vue';

export interface BorderBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BorderBottom: DefineComponent<BorderBottomProps>;

export default BorderBottom;
export { BorderBottom };

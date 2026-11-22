import type { DefineComponent } from 'vue';

export interface JustifyBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const JustifyBottom: DefineComponent<JustifyBottomProps>;

export default JustifyBottom;
export { JustifyBottom };

import type { DefineComponent } from 'vue';

export interface XOverlineCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XOverlineCircle: DefineComponent<XOverlineCircleProps>;

export default XOverlineCircle;
export { XOverlineCircle };

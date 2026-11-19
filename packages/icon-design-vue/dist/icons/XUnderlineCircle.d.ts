import type { DefineComponent } from 'vue';

export interface XUnderlineCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XUnderlineCircle: DefineComponent<XUnderlineCircleProps>;

export default XUnderlineCircle;
export { XUnderlineCircle };

import type { DefineComponent } from 'vue';

export interface XCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XCircle: DefineComponent<XCircleProps>;

export default XCircle;
export { XCircle };

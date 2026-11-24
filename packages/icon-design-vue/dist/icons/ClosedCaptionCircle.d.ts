import type { DefineComponent } from 'vue';

export interface ClosedCaptionCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionCircle: DefineComponent<ClosedCaptionCircleProps>;

export default ClosedCaptionCircle;
export { ClosedCaptionCircle };

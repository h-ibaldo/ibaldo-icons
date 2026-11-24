import type { DefineComponent } from 'vue';

export interface ClosedCaptionOctagonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionOctagon: DefineComponent<ClosedCaptionOctagonProps>;

export default ClosedCaptionOctagon;
export { ClosedCaptionOctagon };

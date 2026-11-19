import type { DefineComponent } from 'vue';

export interface ClosedCaptionBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionBare: DefineComponent<ClosedCaptionBareProps>;

export default ClosedCaptionBare;
export { ClosedCaptionBare };

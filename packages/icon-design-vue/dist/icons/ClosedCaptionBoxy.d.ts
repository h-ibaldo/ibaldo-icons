import type { DefineComponent } from 'vue';

export interface ClosedCaptionBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionBoxy: DefineComponent<ClosedCaptionBoxyProps>;

export default ClosedCaptionBoxy;
export { ClosedCaptionBoxy };

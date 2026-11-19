import type { DefineComponent } from 'vue';

export interface ClosedCaptionCushionProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionCushion: DefineComponent<ClosedCaptionCushionProps>;

export default ClosedCaptionCushion;
export { ClosedCaptionCushion };

import type { DefineComponent } from 'vue';

export interface PaperPlaneNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperPlaneNotch: DefineComponent<PaperPlaneNotchProps>;

export default PaperPlaneNotch;
export { PaperPlaneNotch };

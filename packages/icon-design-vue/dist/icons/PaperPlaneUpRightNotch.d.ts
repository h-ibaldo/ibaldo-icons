import type { DefineComponent } from 'vue';

export interface PaperPlaneUpRightNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperPlaneUpRightNotch: DefineComponent<PaperPlaneUpRightNotchProps>;

export default PaperPlaneUpRightNotch;
export { PaperPlaneUpRightNotch };

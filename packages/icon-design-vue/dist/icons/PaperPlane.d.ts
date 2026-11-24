import type { DefineComponent } from 'vue';

export interface PaperPlaneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperPlane: DefineComponent<PaperPlaneProps>;

export default PaperPlane;
export { PaperPlane };

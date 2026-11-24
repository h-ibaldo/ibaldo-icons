import type { DefineComponent } from 'vue';

export interface PaperPlaneUpRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperPlaneUpRight: DefineComponent<PaperPlaneUpRightProps>;

export default PaperPlaneUpRight;
export { PaperPlaneUpRight };

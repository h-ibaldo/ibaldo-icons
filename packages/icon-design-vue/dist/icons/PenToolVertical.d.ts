import type { DefineComponent } from 'vue';

export interface PenToolVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PenToolVertical: DefineComponent<PenToolVerticalProps>;

export default PenToolVertical;
export { PenToolVertical };

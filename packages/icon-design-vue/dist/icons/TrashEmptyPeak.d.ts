import type { DefineComponent } from 'vue';

export interface TrashEmptyPeakProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashEmptyPeak: DefineComponent<TrashEmptyPeakProps>;

export default TrashEmptyPeak;
export { TrashEmptyPeak };

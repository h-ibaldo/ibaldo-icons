import type { DefineComponent } from 'vue';

export interface TrashArrowUpNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashArrowUpNotch: DefineComponent<TrashArrowUpNotchProps>;

export default TrashArrowUpNotch;
export { TrashArrowUpNotch };

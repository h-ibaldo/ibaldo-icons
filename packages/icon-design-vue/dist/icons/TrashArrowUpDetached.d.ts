import type { DefineComponent } from 'vue';

export interface TrashArrowUpDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashArrowUpDetached: DefineComponent<TrashArrowUpDetachedProps>;

export default TrashArrowUpDetached;
export { TrashArrowUpDetached };

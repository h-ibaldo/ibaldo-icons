import type { DefineComponent } from 'vue';

export interface TrashNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashNarrow: DefineComponent<TrashNarrowProps>;

export default TrashNarrow;
export { TrashNarrow };

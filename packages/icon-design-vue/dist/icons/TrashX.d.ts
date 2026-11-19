import type { DefineComponent } from 'vue';

export interface TrashXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashX: DefineComponent<TrashXProps>;

export default TrashX;
export { TrashX };

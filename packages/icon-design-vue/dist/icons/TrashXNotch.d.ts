import type { DefineComponent } from 'vue';

export interface TrashXNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashXNotch: DefineComponent<TrashXNotchProps>;

export default TrashXNotch;
export { TrashXNotch };

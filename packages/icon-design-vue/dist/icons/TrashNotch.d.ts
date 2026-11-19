import type { DefineComponent } from 'vue';

export interface TrashNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashNotch: DefineComponent<TrashNotchProps>;

export default TrashNotch;
export { TrashNotch };

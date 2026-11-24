import type { DefineComponent } from 'vue';

export interface TrashRecycleNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashRecycleNotch: DefineComponent<TrashRecycleNotchProps>;

export default TrashRecycleNotch;
export { TrashRecycleNotch };

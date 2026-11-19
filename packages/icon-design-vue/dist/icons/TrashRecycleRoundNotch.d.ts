import type { DefineComponent } from 'vue';

export interface TrashRecycleRoundNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashRecycleRoundNotch: DefineComponent<TrashRecycleRoundNotchProps>;

export default TrashRecycleRoundNotch;
export { TrashRecycleRoundNotch };

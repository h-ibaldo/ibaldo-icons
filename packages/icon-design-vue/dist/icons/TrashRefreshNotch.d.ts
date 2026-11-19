import type { DefineComponent } from 'vue';

export interface TrashRefreshNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashRefreshNotch: DefineComponent<TrashRefreshNotchProps>;

export default TrashRefreshNotch;
export { TrashRefreshNotch };

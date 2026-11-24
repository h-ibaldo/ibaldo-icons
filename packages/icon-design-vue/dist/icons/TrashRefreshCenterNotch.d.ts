import type { DefineComponent } from 'vue';

export interface TrashRefreshCenterNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashRefreshCenterNotch: DefineComponent<TrashRefreshCenterNotchProps>;

export default TrashRefreshCenterNotch;
export { TrashRefreshCenterNotch };

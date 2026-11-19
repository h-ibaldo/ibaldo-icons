import type { DefineComponent } from 'vue';

export interface TrashSyncNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashSyncNotch: DefineComponent<TrashSyncNotchProps>;

export default TrashSyncNotch;
export { TrashSyncNotch };

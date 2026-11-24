import type { DefineComponent } from 'vue';

export interface TrashSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashSync: DefineComponent<TrashSyncProps>;

export default TrashSync;
export { TrashSync };

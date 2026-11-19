import type { DefineComponent } from 'vue';

export interface TrashSyncDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashSyncDetached: DefineComponent<TrashSyncDetachedProps>;

export default TrashSyncDetached;
export { TrashSyncDetached };

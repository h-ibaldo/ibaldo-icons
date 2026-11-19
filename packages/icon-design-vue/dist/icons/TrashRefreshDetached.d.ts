import type { DefineComponent } from 'vue';

export interface TrashRefreshDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashRefreshDetached: DefineComponent<TrashRefreshDetachedProps>;

export default TrashRefreshDetached;
export { TrashRefreshDetached };

import type { DefineComponent } from 'vue';

export interface TrashRefreshProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashRefresh: DefineComponent<TrashRefreshProps>;

export default TrashRefresh;
export { TrashRefresh };

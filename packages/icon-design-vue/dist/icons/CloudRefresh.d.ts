import type { DefineComponent } from 'vue';

export interface CloudRefreshProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudRefresh: DefineComponent<CloudRefreshProps>;

export default CloudRefresh;
export { CloudRefresh };

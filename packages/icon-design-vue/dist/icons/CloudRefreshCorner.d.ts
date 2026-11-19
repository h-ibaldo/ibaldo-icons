import type { DefineComponent } from 'vue';

export interface CloudRefreshCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudRefreshCorner: DefineComponent<CloudRefreshCornerProps>;

export default CloudRefreshCorner;
export { CloudRefreshCorner };

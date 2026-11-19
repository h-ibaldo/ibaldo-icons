import type { DefineComponent } from 'vue';

export interface WindowOverlapRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowOverlapRight: DefineComponent<WindowOverlapRightProps>;

export default WindowOverlapRight;
export { WindowOverlapRight };

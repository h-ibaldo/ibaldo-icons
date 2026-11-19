import type { DefineComponent } from 'vue';

export interface WindowOverlapLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowOverlapLeft: DefineComponent<WindowOverlapLeftProps>;

export default WindowOverlapLeft;
export { WindowOverlapLeft };

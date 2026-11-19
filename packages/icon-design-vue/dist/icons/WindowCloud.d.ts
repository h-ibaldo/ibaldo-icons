import type { DefineComponent } from 'vue';

export interface WindowCloudProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowCloud: DefineComponent<WindowCloudProps>;

export default WindowCloud;
export { WindowCloud };

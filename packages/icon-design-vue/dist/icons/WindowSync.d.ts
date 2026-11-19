import type { DefineComponent } from 'vue';

export interface WindowSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSync: DefineComponent<WindowSyncProps>;

export default WindowSync;
export { WindowSync };

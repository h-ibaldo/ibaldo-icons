import type { DefineComponent } from 'vue';

export interface WindowSyncLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSyncLarge: DefineComponent<WindowSyncLargeProps>;

export default WindowSyncLarge;
export { WindowSyncLarge };

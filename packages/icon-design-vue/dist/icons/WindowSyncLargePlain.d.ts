import type { DefineComponent } from 'vue';

export interface WindowSyncLargePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSyncLargePlain: DefineComponent<WindowSyncLargePlainProps>;

export default WindowSyncLargePlain;
export { WindowSyncLargePlain };

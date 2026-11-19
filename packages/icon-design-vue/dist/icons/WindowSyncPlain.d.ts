import type { DefineComponent } from 'vue';

export interface WindowSyncPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSyncPlain: DefineComponent<WindowSyncPlainProps>;

export default WindowSyncPlain;
export { WindowSyncPlain };

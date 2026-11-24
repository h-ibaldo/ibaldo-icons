import type { DefineComponent } from 'vue';

export interface WindowTogglePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowTogglePlain: DefineComponent<WindowTogglePlainProps>;

export default WindowTogglePlain;
export { WindowTogglePlain };

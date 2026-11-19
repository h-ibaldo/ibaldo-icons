import type { DefineComponent } from 'vue';

export interface ScreenShareXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenShareX: DefineComponent<ScreenShareXProps>;

export default ScreenShareX;
export { ScreenShareX };

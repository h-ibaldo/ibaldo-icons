import type { DefineComponent } from 'vue';

export interface ScreenShareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenShare: DefineComponent<ScreenShareProps>;

export default ScreenShare;
export { ScreenShare };

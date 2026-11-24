import type { DefineComponent } from 'vue';

export interface WindowEyedropperProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowEyedropper: DefineComponent<WindowEyedropperProps>;

export default WindowEyedropper;
export { WindowEyedropper };

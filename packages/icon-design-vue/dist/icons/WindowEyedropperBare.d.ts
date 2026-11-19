import type { DefineComponent } from 'vue';

export interface WindowEyedropperBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowEyedropperBare: DefineComponent<WindowEyedropperBareProps>;

export default WindowEyedropperBare;
export { WindowEyedropperBare };

import type { DefineComponent } from 'vue';

export interface WindowGlobePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowGlobePlain: DefineComponent<WindowGlobePlainProps>;

export default WindowGlobePlain;
export { WindowGlobePlain };

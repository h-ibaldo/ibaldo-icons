import type { DefineComponent } from 'vue';

export interface WindowCheckCirclePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowCheckCirclePlain: DefineComponent<WindowCheckCirclePlainProps>;

export default WindowCheckCirclePlain;
export { WindowCheckCirclePlain };

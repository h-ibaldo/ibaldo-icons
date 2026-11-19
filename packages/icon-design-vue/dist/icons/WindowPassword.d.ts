import type { DefineComponent } from 'vue';

export interface WindowPasswordProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPassword: DefineComponent<WindowPasswordProps>;

export default WindowPassword;
export { WindowPassword };

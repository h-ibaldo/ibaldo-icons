import type { DefineComponent } from 'vue';

export interface WindowButtonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowButton: DefineComponent<WindowButtonProps>;

export default WindowButton;
export { WindowButton };

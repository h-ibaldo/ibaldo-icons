import type { DefineComponent } from 'vue';

export interface WindowDotsVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowDotsVertical: DefineComponent<WindowDotsVerticalProps>;

export default WindowDotsVertical;
export { WindowDotsVertical };

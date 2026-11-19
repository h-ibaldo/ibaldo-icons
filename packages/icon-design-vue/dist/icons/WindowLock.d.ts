import type { DefineComponent } from 'vue';

export interface WindowLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowLock: DefineComponent<WindowLockProps>;

export default WindowLock;
export { WindowLock };

import type { DefineComponent } from 'vue';

export interface WindowLockPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowLockPlain: DefineComponent<WindowLockPlainProps>;

export default WindowLockPlain;
export { WindowLockPlain };

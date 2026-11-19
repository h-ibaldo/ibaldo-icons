import type { DefineComponent } from 'vue';

export interface CloudUnlockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudUnlock: DefineComponent<CloudUnlockProps>;

export default CloudUnlock;
export { CloudUnlock };

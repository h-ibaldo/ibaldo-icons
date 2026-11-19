import type { DefineComponent } from 'vue';

export interface CloudLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudLock: DefineComponent<CloudLockProps>;

export default CloudLock;
export { CloudLock };

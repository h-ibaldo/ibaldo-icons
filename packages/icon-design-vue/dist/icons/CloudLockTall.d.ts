import type { DefineComponent } from 'vue';

export interface CloudLockTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudLockTall: DefineComponent<CloudLockTallProps>;

export default CloudLockTall;
export { CloudLockTall };

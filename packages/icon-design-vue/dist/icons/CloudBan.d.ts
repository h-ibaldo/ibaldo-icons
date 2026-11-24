import type { DefineComponent } from 'vue';

export interface CloudBanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudBan: DefineComponent<CloudBanProps>;

export default CloudBan;
export { CloudBan };

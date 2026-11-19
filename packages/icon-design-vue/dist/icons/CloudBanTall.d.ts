import type { DefineComponent } from 'vue';

export interface CloudBanTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudBanTall: DefineComponent<CloudBanTallProps>;

export default CloudBanTall;
export { CloudBanTall };

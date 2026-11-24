import type { DefineComponent } from 'vue';

export interface CloudWarningTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudWarningTall: DefineComponent<CloudWarningTallProps>;

export default CloudWarningTall;
export { CloudWarningTall };

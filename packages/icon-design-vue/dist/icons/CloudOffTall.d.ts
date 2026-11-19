import type { DefineComponent } from 'vue';

export interface CloudOffTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudOffTall: DefineComponent<CloudOffTallProps>;

export default CloudOffTall;
export { CloudOffTall };

import type { DefineComponent } from 'vue';

export interface CloudXTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudXTall: DefineComponent<CloudXTallProps>;

export default CloudXTall;
export { CloudXTall };

import type { DefineComponent } from 'vue';

export interface CloudTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudTall: DefineComponent<CloudTallProps>;

export default CloudTall;
export { CloudTall };

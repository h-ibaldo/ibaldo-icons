import type { DefineComponent } from 'vue';

export interface CloudCheckTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudCheckTall: DefineComponent<CloudCheckTallProps>;

export default CloudCheckTall;
export { CloudCheckTall };

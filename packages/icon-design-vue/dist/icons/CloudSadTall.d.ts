import type { DefineComponent } from 'vue';

export interface CloudSadTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSadTall: DefineComponent<CloudSadTallProps>;

export default CloudSadTall;
export { CloudSadTall };

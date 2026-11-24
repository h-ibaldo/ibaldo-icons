import type { DefineComponent } from 'vue';

export interface CloudMailTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudMailTall: DefineComponent<CloudMailTallProps>;

export default CloudMailTall;
export { CloudMailTall };

import type { DefineComponent } from 'vue';

export interface CloudHappyTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudHappyTall: DefineComponent<CloudHappyTallProps>;

export default CloudHappyTall;
export { CloudHappyTall };

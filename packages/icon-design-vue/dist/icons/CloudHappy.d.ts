import type { DefineComponent } from 'vue';

export interface CloudHappyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudHappy: DefineComponent<CloudHappyProps>;

export default CloudHappy;
export { CloudHappy };

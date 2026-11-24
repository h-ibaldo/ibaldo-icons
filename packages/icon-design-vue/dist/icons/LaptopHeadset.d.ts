import type { DefineComponent } from 'vue';

export interface LaptopHeadsetProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopHeadset: DefineComponent<LaptopHeadsetProps>;

export default LaptopHeadset;
export { LaptopHeadset };

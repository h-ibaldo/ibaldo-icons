import type { DefineComponent } from 'vue';

export interface MobilePowerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobilePower: DefineComponent<MobilePowerProps>;

export default MobilePower;
export { MobilePower };

import type { DefineComponent } from 'vue';

export interface UsbStickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UsbStick: DefineComponent<UsbStickProps>;

export default UsbStick;
export { UsbStick };

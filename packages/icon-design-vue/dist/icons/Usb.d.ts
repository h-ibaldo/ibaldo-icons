import type { DefineComponent } from 'vue';

export interface UsbProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Usb: DefineComponent<UsbProps>;

export default Usb;
export { Usb };

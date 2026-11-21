import type { DefineComponent } from 'vue';

export interface UsbPortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const UsbPort: DefineComponent<UsbPortProps>;

export default UsbPort;
export { UsbPort };

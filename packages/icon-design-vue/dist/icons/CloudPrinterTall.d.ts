import type { DefineComponent } from 'vue';

export interface CloudPrinterTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudPrinterTall: DefineComponent<CloudPrinterTallProps>;

export default CloudPrinterTall;
export { CloudPrinterTall };

import type { DefineComponent } from 'vue';

export interface CloudPrinterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudPrinter: DefineComponent<CloudPrinterProps>;

export default CloudPrinter;
export { CloudPrinter };

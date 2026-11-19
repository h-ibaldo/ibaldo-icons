import type { DefineComponent } from 'vue';

export interface CloudPrinterRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudPrinterRound: DefineComponent<CloudPrinterRoundProps>;

export default CloudPrinterRound;
export { CloudPrinterRound };

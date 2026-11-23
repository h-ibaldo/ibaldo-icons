import type { DefineComponent } from 'vue';

export interface PrinterCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PrinterCheck: DefineComponent<PrinterCheckProps>;

export default PrinterCheck;
export { PrinterCheck };

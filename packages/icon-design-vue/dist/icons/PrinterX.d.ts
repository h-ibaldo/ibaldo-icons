import type { DefineComponent } from 'vue';

export interface PrinterXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PrinterX: DefineComponent<PrinterXProps>;

export default PrinterX;
export { PrinterX };

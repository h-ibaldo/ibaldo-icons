import type { DefineComponent } from 'vue';

export interface PrinterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Printer: DefineComponent<PrinterProps>;

export default Printer;
export { Printer };

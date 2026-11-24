import type { DefineComponent } from 'vue';

export interface PrinterFileProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PrinterFile: DefineComponent<PrinterFileProps>;

export default PrinterFile;
export { PrinterFile };

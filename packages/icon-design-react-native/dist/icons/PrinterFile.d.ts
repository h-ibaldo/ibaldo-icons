import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PrinterFileProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PrinterFile: ForwardRefExoticComponent<PrinterFileProps & RefAttributes<Svg>>;

export default PrinterFile;
export { PrinterFile };

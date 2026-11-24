import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PrinterXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PrinterX: ForwardRefExoticComponent<PrinterXProps & RefAttributes<Svg>>;

export default PrinterX;
export { PrinterX };

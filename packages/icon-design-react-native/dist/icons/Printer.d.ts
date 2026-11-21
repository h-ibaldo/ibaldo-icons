import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PrinterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Printer: ForwardRefExoticComponent<PrinterProps & RefAttributes<Svg>>;

export default Printer;
export { Printer };

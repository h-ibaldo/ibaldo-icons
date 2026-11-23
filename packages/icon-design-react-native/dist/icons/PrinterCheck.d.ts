import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PrinterCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PrinterCheck: ForwardRefExoticComponent<PrinterCheckProps & RefAttributes<Svg>>;

export default PrinterCheck;
export { PrinterCheck };

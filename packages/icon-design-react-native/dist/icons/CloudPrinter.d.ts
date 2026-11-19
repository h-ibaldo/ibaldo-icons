import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudPrinterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudPrinter: ForwardRefExoticComponent<CloudPrinterProps & RefAttributes<Svg>>;

export default CloudPrinter;
export { CloudPrinter };

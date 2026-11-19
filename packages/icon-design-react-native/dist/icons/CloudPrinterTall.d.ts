import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudPrinterTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudPrinterTall: ForwardRefExoticComponent<CloudPrinterTallProps & RefAttributes<Svg>>;

export default CloudPrinterTall;
export { CloudPrinterTall };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudPrinterRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudPrinterRound: ForwardRefExoticComponent<CloudPrinterRoundProps & RefAttributes<Svg>>;

export default CloudPrinterRound;
export { CloudPrinterRound };

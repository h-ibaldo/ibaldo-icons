import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMinusCornerTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMinusCornerTall: ForwardRefExoticComponent<CloudMinusCornerTallProps & RefAttributes<Svg>>;

export default CloudMinusCornerTall;
export { CloudMinusCornerTall };

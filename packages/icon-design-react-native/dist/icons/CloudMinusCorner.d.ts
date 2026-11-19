import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMinusCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMinusCorner: ForwardRefExoticComponent<CloudMinusCornerProps & RefAttributes<Svg>>;

export default CloudMinusCorner;
export { CloudMinusCorner };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxLidClaspProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxLidClasp: ForwardRefExoticComponent<BoxLidClaspProps & RefAttributes<Svg>>;

export default BoxLidClasp;
export { BoxLidClasp };

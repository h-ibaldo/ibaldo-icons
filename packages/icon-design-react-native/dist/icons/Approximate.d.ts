import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ApproximateProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Approximate: ForwardRefExoticComponent<ApproximateProps & RefAttributes<Svg>>;

export default Approximate;
export { Approximate };

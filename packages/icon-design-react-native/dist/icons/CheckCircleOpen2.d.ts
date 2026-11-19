import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleOpen2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleOpen2: ForwardRefExoticComponent<CheckCircleOpen2Props & RefAttributes<Svg>>;

export default CheckCircleOpen2;
export { CheckCircleOpen2 };

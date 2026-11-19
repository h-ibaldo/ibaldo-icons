import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleOpen3Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleOpen3: ForwardRefExoticComponent<CheckCircleOpen3Props & RefAttributes<Svg>>;

export default CheckCircleOpen3;
export { CheckCircleOpen3 };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleOpen: ForwardRefExoticComponent<CheckCircleOpenProps & RefAttributes<Svg>>;

export default CheckCircleOpen;
export { CheckCircleOpen };

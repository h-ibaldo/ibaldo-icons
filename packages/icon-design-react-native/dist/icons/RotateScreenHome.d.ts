import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RotateScreenHomeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RotateScreenHome: ForwardRefExoticComponent<RotateScreenHomeProps & RefAttributes<Svg>>;

export default RotateScreenHome;
export { RotateScreenHome };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RotateScreenBezelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RotateScreenBezel: ForwardRefExoticComponent<RotateScreenBezelProps & RefAttributes<Svg>>;

export default RotateScreenBezel;
export { RotateScreenBezel };

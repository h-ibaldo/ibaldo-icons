import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RotateScreenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RotateScreen: ForwardRefExoticComponent<RotateScreenProps & RefAttributes<Svg>>;

export default RotateScreen;
export { RotateScreen };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandPointerCuffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandPointerCuff: ForwardRefExoticComponent<HandPointerCuffProps & RefAttributes<Svg>>;

export default HandPointerCuff;
export { HandPointerCuff };

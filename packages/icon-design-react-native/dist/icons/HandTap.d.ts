import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandTapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandTap: ForwardRefExoticComponent<HandTapProps & RefAttributes<Svg>>;

export default HandTap;
export { HandTap };

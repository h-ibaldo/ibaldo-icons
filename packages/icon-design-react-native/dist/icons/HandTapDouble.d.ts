import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandTapDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandTapDouble: ForwardRefExoticComponent<HandTapDoubleProps & RefAttributes<Svg>>;

export default HandTapDouble;
export { HandTapDouble };

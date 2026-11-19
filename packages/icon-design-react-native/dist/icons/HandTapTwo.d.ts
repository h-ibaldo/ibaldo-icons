import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandTapTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandTapTwo: ForwardRefExoticComponent<HandTapTwoProps & RefAttributes<Svg>>;

export default HandTapTwo;
export { HandTapTwo };

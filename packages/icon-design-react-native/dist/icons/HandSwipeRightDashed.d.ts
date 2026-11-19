import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeRightDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeRightDashed: ForwardRefExoticComponent<HandSwipeRightDashedProps & RefAttributes<Svg>>;

export default HandSwipeRightDashed;
export { HandSwipeRightDashed };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BetweenHorizontalStartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BetweenHorizontalStart: ForwardRefExoticComponent<BetweenHorizontalStartProps & RefAttributes<Svg>>;

export default BetweenHorizontalStart;
export { BetweenHorizontalStart };

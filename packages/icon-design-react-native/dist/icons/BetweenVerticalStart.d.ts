import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BetweenVerticalStartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BetweenVerticalStart: ForwardRefExoticComponent<BetweenVerticalStartProps & RefAttributes<Svg>>;

export default BetweenVerticalStart;
export { BetweenVerticalStart };

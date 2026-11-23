import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BetweenVerticalEndProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BetweenVerticalEnd: ForwardRefExoticComponent<BetweenVerticalEndProps & RefAttributes<Svg>>;

export default BetweenVerticalEnd;
export { BetweenVerticalEnd };

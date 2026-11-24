import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BetweenHorizontalEndProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BetweenHorizontalEnd: ForwardRefExoticComponent<BetweenHorizontalEndProps & RefAttributes<Svg>>;

export default BetweenHorizontalEnd;
export { BetweenHorizontalEnd };

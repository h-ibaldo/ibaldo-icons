import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WheelchairSquare3Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WheelchairSquare3: ForwardRefExoticComponent<WheelchairSquare3Props & RefAttributes<Svg>>;

export default WheelchairSquare3;
export { WheelchairSquare3 };

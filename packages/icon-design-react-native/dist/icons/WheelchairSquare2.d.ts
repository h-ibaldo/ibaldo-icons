import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WheelchairSquare2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WheelchairSquare2: ForwardRefExoticComponent<WheelchairSquare2Props & RefAttributes<Svg>>;

export default WheelchairSquare2;
export { WheelchairSquare2 };

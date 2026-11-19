import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerMinusCircleStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerMinusCircleStraight: ForwardRefExoticComponent<PointerMinusCircleStraightProps & RefAttributes<Svg>>;

export default PointerMinusCircleStraight;
export { PointerMinusCircleStraight };

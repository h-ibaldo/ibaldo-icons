import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerMinusStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerMinusStraight: ForwardRefExoticComponent<PointerMinusStraightProps & RefAttributes<Svg>>;

export default PointerMinusStraight;
export { PointerMinusStraight };

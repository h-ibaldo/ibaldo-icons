import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerMinusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerMinusCircle: ForwardRefExoticComponent<PointerMinusCircleProps & RefAttributes<Svg>>;

export default PointerMinusCircle;
export { PointerMinusCircle };

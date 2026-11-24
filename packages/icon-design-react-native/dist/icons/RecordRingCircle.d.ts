import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RecordRingCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RecordRingCircle: ForwardRefExoticComponent<RecordRingCircleProps & RefAttributes<Svg>>;

export default RecordRingCircle;
export { RecordRingCircle };

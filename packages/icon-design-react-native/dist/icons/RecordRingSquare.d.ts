import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RecordRingSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RecordRingSquare: ForwardRefExoticComponent<RecordRingSquareProps & RefAttributes<Svg>>;

export default RecordRingSquare;
export { RecordRingSquare };

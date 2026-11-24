import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RecordSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RecordSquare: ForwardRefExoticComponent<RecordSquareProps & RefAttributes<Svg>>;

export default RecordSquare;
export { RecordSquare };

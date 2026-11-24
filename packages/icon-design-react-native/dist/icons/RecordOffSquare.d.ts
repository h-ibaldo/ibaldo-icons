import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RecordOffSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RecordOffSquare: ForwardRefExoticComponent<RecordOffSquareProps & RefAttributes<Svg>>;

export default RecordOffSquare;
export { RecordOffSquare };

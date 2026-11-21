import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ApproximateSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ApproximateSquare: ForwardRefExoticComponent<ApproximateSquareProps & RefAttributes<Svg>>;

export default ApproximateSquare;
export { ApproximateSquare };

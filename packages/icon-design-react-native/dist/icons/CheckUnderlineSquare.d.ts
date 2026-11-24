import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckUnderlineSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckUnderlineSquare: ForwardRefExoticComponent<CheckUnderlineSquareProps & RefAttributes<Svg>>;

export default CheckUnderlineSquare;
export { CheckUnderlineSquare };

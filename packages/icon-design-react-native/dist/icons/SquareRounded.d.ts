import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareRounded: ForwardRefExoticComponent<SquareRoundedProps & RefAttributes<Svg>>;

export default SquareRounded;
export { SquareRounded };

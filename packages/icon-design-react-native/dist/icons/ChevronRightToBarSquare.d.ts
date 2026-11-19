import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronRightToBarSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronRightToBarSquare: ForwardRefExoticComponent<ChevronRightToBarSquareProps & RefAttributes<Svg>>;

export default ChevronRightToBarSquare;
export { ChevronRightToBarSquare };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlusSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlusSquare: ForwardRefExoticComponent<PlusSquareProps & RefAttributes<Svg>>;

export default PlusSquare;
export { PlusSquare };

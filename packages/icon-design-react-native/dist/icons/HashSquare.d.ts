import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HashSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HashSquare: ForwardRefExoticComponent<HashSquareProps & RefAttributes<Svg>>;

export default HashSquare;
export { HashSquare };

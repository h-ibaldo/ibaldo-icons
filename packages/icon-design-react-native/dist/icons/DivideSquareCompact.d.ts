import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DivideSquareCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DivideSquareCompact: ForwardRefExoticComponent<DivideSquareCompactProps & RefAttributes<Svg>>;

export default DivideSquareCompact;
export { DivideSquareCompact };

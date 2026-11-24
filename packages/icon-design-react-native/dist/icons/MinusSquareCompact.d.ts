import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MinusSquareCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MinusSquareCompact: ForwardRefExoticComponent<MinusSquareCompactProps & RefAttributes<Svg>>;

export default MinusSquareCompact;
export { MinusSquareCompact };

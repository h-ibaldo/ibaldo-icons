import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MinusSquareCompactLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MinusSquareCompactLarge: ForwardRefExoticComponent<MinusSquareCompactLargeProps & RefAttributes<Svg>>;

export default MinusSquareCompactLarge;
export { MinusSquareCompactLarge };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquarePaddingBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquarePaddingBottom: ForwardRefExoticComponent<SquarePaddingBottomProps & RefAttributes<Svg>>;

export default SquarePaddingBottom;
export { SquarePaddingBottom };

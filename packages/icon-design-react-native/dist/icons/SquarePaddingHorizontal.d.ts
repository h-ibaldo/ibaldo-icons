import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquarePaddingHorizontalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquarePaddingHorizontal: ForwardRefExoticComponent<SquarePaddingHorizontalProps & RefAttributes<Svg>>;

export default SquarePaddingHorizontal;
export { SquarePaddingHorizontal };

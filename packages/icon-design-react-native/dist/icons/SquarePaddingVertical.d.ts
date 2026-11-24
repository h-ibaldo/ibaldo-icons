import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquarePaddingVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquarePaddingVertical: ForwardRefExoticComponent<SquarePaddingVerticalProps & RefAttributes<Svg>>;

export default SquarePaddingVertical;
export { SquarePaddingVertical };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquarePaddingTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquarePaddingTop: ForwardRefExoticComponent<SquarePaddingTopProps & RefAttributes<Svg>>;

export default SquarePaddingTop;
export { SquarePaddingTop };

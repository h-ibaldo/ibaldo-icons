import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareSplitBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareSplitBottom: ForwardRefExoticComponent<SquareSplitBottomProps & RefAttributes<Svg>>;

export default SquareSplitBottom;
export { SquareSplitBottom };

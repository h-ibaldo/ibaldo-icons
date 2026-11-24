import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareSplitTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareSplitTop: ForwardRefExoticComponent<SquareSplitTopProps & RefAttributes<Svg>>;

export default SquareSplitTop;
export { SquareSplitTop };

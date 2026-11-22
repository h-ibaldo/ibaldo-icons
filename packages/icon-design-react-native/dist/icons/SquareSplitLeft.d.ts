import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareSplitLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareSplitLeft: ForwardRefExoticComponent<SquareSplitLeftProps & RefAttributes<Svg>>;

export default SquareSplitLeft;
export { SquareSplitLeft };

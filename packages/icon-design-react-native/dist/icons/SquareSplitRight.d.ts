import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareSplitRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareSplitRight: ForwardRefExoticComponent<SquareSplitRightProps & RefAttributes<Svg>>;

export default SquareSplitRight;
export { SquareSplitRight };

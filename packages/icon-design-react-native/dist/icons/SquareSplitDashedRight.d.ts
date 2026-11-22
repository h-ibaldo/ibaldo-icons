import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareSplitDashedRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareSplitDashedRight: ForwardRefExoticComponent<SquareSplitDashedRightProps & RefAttributes<Svg>>;

export default SquareSplitDashedRight;
export { SquareSplitDashedRight };

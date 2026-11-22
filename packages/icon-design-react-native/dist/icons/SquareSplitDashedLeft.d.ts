import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareSplitDashedLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareSplitDashedLeft: ForwardRefExoticComponent<SquareSplitDashedLeftProps & RefAttributes<Svg>>;

export default SquareSplitDashedLeft;
export { SquareSplitDashedLeft };

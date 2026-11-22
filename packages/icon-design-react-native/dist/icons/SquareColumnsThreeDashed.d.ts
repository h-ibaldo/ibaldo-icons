import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareColumnsThreeDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareColumnsThreeDashed: ForwardRefExoticComponent<SquareColumnsThreeDashedProps & RefAttributes<Svg>>;

export default SquareColumnsThreeDashed;
export { SquareColumnsThreeDashed };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareRowsThreeDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareRowsThreeDashed: ForwardRefExoticComponent<SquareRowsThreeDashedProps & RefAttributes<Svg>>;

export default SquareRowsThreeDashed;
export { SquareRowsThreeDashed };

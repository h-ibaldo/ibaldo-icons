import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareRowsThreeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareRowsThree: ForwardRefExoticComponent<SquareRowsThreeProps & RefAttributes<Svg>>;

export default SquareRowsThree;
export { SquareRowsThree };

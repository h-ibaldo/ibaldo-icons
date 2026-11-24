import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareColumnsThreeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareColumnsThree: ForwardRefExoticComponent<SquareColumnsThreeProps & RefAttributes<Svg>>;

export default SquareColumnsThree;
export { SquareColumnsThree };

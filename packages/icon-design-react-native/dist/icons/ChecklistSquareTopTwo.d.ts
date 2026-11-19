import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistSquareTopTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistSquareTopTwo: ForwardRefExoticComponent<ChecklistSquareTopTwoProps & RefAttributes<Svg>>;

export default ChecklistSquareTopTwo;
export { ChecklistSquareTopTwo };

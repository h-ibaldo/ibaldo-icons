import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistSquareTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistSquareTop: ForwardRefExoticComponent<ChecklistSquareTopProps & RefAttributes<Svg>>;

export default ChecklistSquareTop;
export { ChecklistSquareTop };

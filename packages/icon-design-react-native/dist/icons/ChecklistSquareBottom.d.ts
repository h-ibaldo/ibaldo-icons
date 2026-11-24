import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistSquareBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistSquareBottom: ForwardRefExoticComponent<ChecklistSquareBottomProps & RefAttributes<Svg>>;

export default ChecklistSquareBottom;
export { ChecklistSquareBottom };

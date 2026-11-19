import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistCircleBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistCircleBottom: ForwardRefExoticComponent<ChecklistCircleBottomProps & RefAttributes<Svg>>;

export default ChecklistCircleBottom;
export { ChecklistCircleBottom };

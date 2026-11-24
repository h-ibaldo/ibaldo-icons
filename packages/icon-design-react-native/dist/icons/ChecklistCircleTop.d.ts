import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistCircleTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistCircleTop: ForwardRefExoticComponent<ChecklistCircleTopProps & RefAttributes<Svg>>;

export default ChecklistCircleTop;
export { ChecklistCircleTop };

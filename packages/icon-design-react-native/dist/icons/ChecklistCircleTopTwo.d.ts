import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistCircleTopTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistCircleTopTwo: ForwardRefExoticComponent<ChecklistCircleTopTwoProps & RefAttributes<Svg>>;

export default ChecklistCircleTopTwo;
export { ChecklistCircleTopTwo };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistCircleEndsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistCircleEnds: ForwardRefExoticComponent<ChecklistCircleEndsProps & RefAttributes<Svg>>;

export default ChecklistCircleEnds;
export { ChecklistCircleEnds };

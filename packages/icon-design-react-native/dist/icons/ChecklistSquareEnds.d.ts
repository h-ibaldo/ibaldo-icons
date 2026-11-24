import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistSquareEndsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistSquareEnds: ForwardRefExoticComponent<ChecklistSquareEndsProps & RefAttributes<Svg>>;

export default ChecklistSquareEnds;
export { ChecklistSquareEnds };

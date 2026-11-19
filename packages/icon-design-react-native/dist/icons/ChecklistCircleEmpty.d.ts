import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistCircleEmptyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistCircleEmpty: ForwardRefExoticComponent<ChecklistCircleEmptyProps & RefAttributes<Svg>>;

export default ChecklistCircleEmpty;
export { ChecklistCircleEmpty };

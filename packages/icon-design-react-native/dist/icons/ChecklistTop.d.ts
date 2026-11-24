import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistTop: ForwardRefExoticComponent<ChecklistTopProps & RefAttributes<Svg>>;

export default ChecklistTop;
export { ChecklistTop };

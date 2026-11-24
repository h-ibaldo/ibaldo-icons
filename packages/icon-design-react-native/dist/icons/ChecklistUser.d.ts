import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistUserProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistUser: ForwardRefExoticComponent<ChecklistUserProps & RefAttributes<Svg>>;

export default ChecklistUser;
export { ChecklistUser };

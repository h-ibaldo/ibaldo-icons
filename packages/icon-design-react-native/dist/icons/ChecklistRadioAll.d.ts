import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistRadioAllProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistRadioAll: ForwardRefExoticComponent<ChecklistRadioAllProps & RefAttributes<Svg>>;

export default ChecklistRadioAll;
export { ChecklistRadioAll };

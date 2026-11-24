import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistRadioTopTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistRadioTopTwo: ForwardRefExoticComponent<ChecklistRadioTopTwoProps & RefAttributes<Svg>>;

export default ChecklistRadioTopTwo;
export { ChecklistRadioTopTwo };

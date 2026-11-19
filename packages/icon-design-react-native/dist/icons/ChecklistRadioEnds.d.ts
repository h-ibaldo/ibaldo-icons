import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistRadioEndsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistRadioEnds: ForwardRefExoticComponent<ChecklistRadioEndsProps & RefAttributes<Svg>>;

export default ChecklistRadioEnds;
export { ChecklistRadioEnds };

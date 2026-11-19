import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PollHorizontalCheckboxProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PollHorizontalCheckbox: ForwardRefExoticComponent<PollHorizontalCheckboxProps & RefAttributes<Svg>>;

export default PollHorizontalCheckbox;
export { PollHorizontalCheckbox };

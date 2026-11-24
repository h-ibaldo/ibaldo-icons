import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PollCheckboxProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PollCheckbox: ForwardRefExoticComponent<PollCheckboxProps & RefAttributes<Svg>>;

export default PollCheckbox;
export { PollCheckbox };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToggleMultipleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToggleMultiple: ForwardRefExoticComponent<ToggleMultipleProps & RefAttributes<Svg>>;

export default ToggleMultiple;
export { ToggleMultiple };

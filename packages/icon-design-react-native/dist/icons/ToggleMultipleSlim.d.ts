import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToggleMultipleSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToggleMultipleSlim: ForwardRefExoticComponent<ToggleMultipleSlimProps & RefAttributes<Svg>>;

export default ToggleMultipleSlim;
export { ToggleMultipleSlim };

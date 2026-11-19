import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToggleOnSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToggleOnSlim: ForwardRefExoticComponent<ToggleOnSlimProps & RefAttributes<Svg>>;

export default ToggleOnSlim;
export { ToggleOnSlim };

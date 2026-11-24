import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToggleOffSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToggleOffSlim: ForwardRefExoticComponent<ToggleOffSlimProps & RefAttributes<Svg>>;

export default ToggleOffSlim;
export { ToggleOffSlim };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToggleOffSquaredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToggleOffSquared: ForwardRefExoticComponent<ToggleOffSquaredProps & RefAttributes<Svg>>;

export default ToggleOffSquared;
export { ToggleOffSquared };

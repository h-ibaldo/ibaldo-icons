import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToggleOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToggleOff: ForwardRefExoticComponent<ToggleOffProps & RefAttributes<Svg>>;

export default ToggleOff;
export { ToggleOff };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToggleOnStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToggleOnStriped: ForwardRefExoticComponent<ToggleOnStripedProps & RefAttributes<Svg>>;

export default ToggleOnStriped;
export { ToggleOnStriped };

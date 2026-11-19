import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToggleOnStripedSquaredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToggleOnStripedSquared: ForwardRefExoticComponent<ToggleOnStripedSquaredProps & RefAttributes<Svg>>;

export default ToggleOnStripedSquared;
export { ToggleOnStripedSquared };

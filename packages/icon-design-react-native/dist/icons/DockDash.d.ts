import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DockDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DockDash: ForwardRefExoticComponent<DockDashProps & RefAttributes<Svg>>;

export default DockDash;
export { DockDash };

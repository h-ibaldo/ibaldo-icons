import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DockBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DockBar: ForwardRefExoticComponent<DockBarProps & RefAttributes<Svg>>;

export default DockBar;
export { DockBar };

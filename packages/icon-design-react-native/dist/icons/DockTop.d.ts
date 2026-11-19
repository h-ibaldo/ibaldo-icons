import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DockTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DockTop: ForwardRefExoticComponent<DockTopProps & RefAttributes<Svg>>;

export default DockTop;
export { DockTop };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DockCornerOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DockCornerOff: ForwardRefExoticComponent<DockCornerOffProps & RefAttributes<Svg>>;

export default DockCornerOff;
export { DockCornerOff };

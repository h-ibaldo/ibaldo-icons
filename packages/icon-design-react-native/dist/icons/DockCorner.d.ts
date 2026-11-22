import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DockCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DockCorner: ForwardRefExoticComponent<DockCornerProps & RefAttributes<Svg>>;

export default DockCorner;
export { DockCorner };

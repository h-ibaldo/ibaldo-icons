import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DockFillProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DockFill: ForwardRefExoticComponent<DockFillProps & RefAttributes<Svg>>;

export default DockFill;
export { DockFill };

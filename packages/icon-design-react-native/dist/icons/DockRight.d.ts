import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DockRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DockRight: ForwardRefExoticComponent<DockRightProps & RefAttributes<Svg>>;

export default DockRight;
export { DockRight };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DockHorizontalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DockHorizontal: ForwardRefExoticComponent<DockHorizontalProps & RefAttributes<Svg>>;

export default DockHorizontal;
export { DockHorizontal };

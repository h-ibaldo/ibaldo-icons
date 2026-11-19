import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DockBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DockBottom: ForwardRefExoticComponent<DockBottomProps & RefAttributes<Svg>>;

export default DockBottom;
export { DockBottom };

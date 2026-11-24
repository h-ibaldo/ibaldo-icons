import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DockVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DockVertical: ForwardRefExoticComponent<DockVerticalProps & RefAttributes<Svg>>;

export default DockVertical;
export { DockVertical };

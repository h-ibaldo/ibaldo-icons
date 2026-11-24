import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DockLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DockLeft: ForwardRefExoticComponent<DockLeftProps & RefAttributes<Svg>>;

export default DockLeft;
export { DockLeft };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DashboardSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DashboardSharp: ForwardRefExoticComponent<DashboardSharpProps & RefAttributes<Svg>>;

export default DashboardSharp;
export { DashboardSharp };

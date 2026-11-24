import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DashboardSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DashboardSquare: ForwardRefExoticComponent<DashboardSquareProps & RefAttributes<Svg>>;

export default DashboardSquare;
export { DashboardSquare };

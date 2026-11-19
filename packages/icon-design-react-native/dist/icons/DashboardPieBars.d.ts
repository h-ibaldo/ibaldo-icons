import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DashboardPieBarsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DashboardPieBars: ForwardRefExoticComponent<DashboardPieBarsProps & RefAttributes<Svg>>;

export default DashboardPieBars;
export { DashboardPieBars };

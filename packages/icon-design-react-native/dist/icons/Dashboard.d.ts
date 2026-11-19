import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DashboardProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Dashboard: ForwardRefExoticComponent<DashboardProps & RefAttributes<Svg>>;

export default Dashboard;
export { Dashboard };

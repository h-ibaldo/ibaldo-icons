import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabCheckCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabCheckCenter: ForwardRefExoticComponent<TabCheckCenterProps & RefAttributes<Svg>>;

export default TabCheckCenter;
export { TabCheckCenter };

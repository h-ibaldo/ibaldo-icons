import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabCheckCenterStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabCheckCenterStriped: ForwardRefExoticComponent<TabCheckCenterStripedProps & RefAttributes<Svg>>;

export default TabCheckCenterStriped;
export { TabCheckCenterStriped };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabXCenterStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabXCenterStriped: ForwardRefExoticComponent<TabXCenterStripedProps & RefAttributes<Svg>>;

export default TabXCenterStriped;
export { TabXCenterStriped };

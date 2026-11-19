import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabCheckStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabCheckStriped: ForwardRefExoticComponent<TabCheckStripedProps & RefAttributes<Svg>>;

export default TabCheckStriped;
export { TabCheckStriped };

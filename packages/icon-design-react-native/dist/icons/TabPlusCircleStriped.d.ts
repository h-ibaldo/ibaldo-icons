import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabPlusCircleStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabPlusCircleStriped: ForwardRefExoticComponent<TabPlusCircleStripedProps & RefAttributes<Svg>>;

export default TabPlusCircleStriped;
export { TabPlusCircleStriped };

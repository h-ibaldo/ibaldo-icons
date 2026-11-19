import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabMinusStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabMinusStriped: ForwardRefExoticComponent<TabMinusStripedProps & RefAttributes<Svg>>;

export default TabMinusStriped;
export { TabMinusStriped };

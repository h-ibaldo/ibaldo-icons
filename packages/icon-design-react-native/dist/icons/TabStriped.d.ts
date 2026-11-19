import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabStriped: ForwardRefExoticComponent<TabStripedProps & RefAttributes<Svg>>;

export default TabStriped;
export { TabStriped };

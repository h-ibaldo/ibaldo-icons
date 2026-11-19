import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabDotsStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabDotsStriped: ForwardRefExoticComponent<TabDotsStripedProps & RefAttributes<Svg>>;

export default TabDotsStriped;
export { TabDotsStriped };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabArrowLeftXStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabArrowLeftXStriped: ForwardRefExoticComponent<TabArrowLeftXStripedProps & RefAttributes<Svg>>;

export default TabArrowLeftXStriped;
export { TabArrowLeftXStriped };

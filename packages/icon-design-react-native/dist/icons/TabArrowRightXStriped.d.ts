import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabArrowRightXStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabArrowRightXStriped: ForwardRefExoticComponent<TabArrowRightXStripedProps & RefAttributes<Svg>>;

export default TabArrowRightXStriped;
export { TabArrowRightXStriped };

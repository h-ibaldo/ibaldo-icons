import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabArrowRightXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabArrowRightX: ForwardRefExoticComponent<TabArrowRightXProps & RefAttributes<Svg>>;

export default TabArrowRightX;
export { TabArrowRightX };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabArrowRightXSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabArrowRightXSharp: ForwardRefExoticComponent<TabArrowRightXSharpProps & RefAttributes<Svg>>;

export default TabArrowRightXSharp;
export { TabArrowRightXSharp };

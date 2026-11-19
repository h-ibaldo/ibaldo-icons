import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabArrowLeftXSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabArrowLeftXSharp: ForwardRefExoticComponent<TabArrowLeftXSharpProps & RefAttributes<Svg>>;

export default TabArrowLeftXSharp;
export { TabArrowLeftXSharp };

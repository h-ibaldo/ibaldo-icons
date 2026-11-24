import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabDotsSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabDotsSharp: ForwardRefExoticComponent<TabDotsSharpProps & RefAttributes<Svg>>;

export default TabDotsSharp;
export { TabDotsSharp };

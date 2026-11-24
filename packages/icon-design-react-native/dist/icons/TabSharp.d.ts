import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabSharp: ForwardRefExoticComponent<TabSharpProps & RefAttributes<Svg>>;

export default TabSharp;
export { TabSharp };

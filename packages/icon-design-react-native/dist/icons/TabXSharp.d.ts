import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabXSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabXSharp: ForwardRefExoticComponent<TabXSharpProps & RefAttributes<Svg>>;

export default TabXSharp;
export { TabXSharp };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabMinusSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabMinusSharp: ForwardRefExoticComponent<TabMinusSharpProps & RefAttributes<Svg>>;

export default TabMinusSharp;
export { TabMinusSharp };

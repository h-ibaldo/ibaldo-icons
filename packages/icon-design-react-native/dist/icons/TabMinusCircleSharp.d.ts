import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabMinusCircleSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabMinusCircleSharp: ForwardRefExoticComponent<TabMinusCircleSharpProps & RefAttributes<Svg>>;

export default TabMinusCircleSharp;
export { TabMinusCircleSharp };

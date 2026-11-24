import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabCheckCircleSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabCheckCircleSharp: ForwardRefExoticComponent<TabCheckCircleSharpProps & RefAttributes<Svg>>;

export default TabCheckCircleSharp;
export { TabCheckCircleSharp };

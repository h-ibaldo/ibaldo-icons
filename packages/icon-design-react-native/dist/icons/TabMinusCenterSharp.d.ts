import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabMinusCenterSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabMinusCenterSharp: ForwardRefExoticComponent<TabMinusCenterSharpProps & RefAttributes<Svg>>;

export default TabMinusCenterSharp;
export { TabMinusCenterSharp };

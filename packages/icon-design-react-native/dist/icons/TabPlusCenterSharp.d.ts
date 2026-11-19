import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabPlusCenterSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabPlusCenterSharp: ForwardRefExoticComponent<TabPlusCenterSharpProps & RefAttributes<Svg>>;

export default TabPlusCenterSharp;
export { TabPlusCenterSharp };

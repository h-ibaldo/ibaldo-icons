import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabCheckCenterSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabCheckCenterSharp: ForwardRefExoticComponent<TabCheckCenterSharpProps & RefAttributes<Svg>>;

export default TabCheckCenterSharp;
export { TabCheckCenterSharp };

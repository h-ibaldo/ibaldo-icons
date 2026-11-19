import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabPlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabPlusCircle: ForwardRefExoticComponent<TabPlusCircleProps & RefAttributes<Svg>>;

export default TabPlusCircle;
export { TabPlusCircle };

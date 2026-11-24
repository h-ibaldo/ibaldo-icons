import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabPlus: ForwardRefExoticComponent<TabPlusProps & RefAttributes<Svg>>;

export default TabPlus;
export { TabPlus };

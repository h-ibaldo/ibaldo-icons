import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabPlusCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabPlusCenter: ForwardRefExoticComponent<TabPlusCenterProps & RefAttributes<Svg>>;

export default TabPlusCenter;
export { TabPlusCenter };

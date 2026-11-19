import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabPlusStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabPlusStriped: ForwardRefExoticComponent<TabPlusStripedProps & RefAttributes<Svg>>;

export default TabPlusStriped;
export { TabPlusStriped };

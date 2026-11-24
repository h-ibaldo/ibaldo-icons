import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabPlusCenterStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabPlusCenterStriped: ForwardRefExoticComponent<TabPlusCenterStripedProps & RefAttributes<Svg>>;

export default TabPlusCenterStriped;
export { TabPlusCenterStriped };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabMinusCenterStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabMinusCenterStriped: ForwardRefExoticComponent<TabMinusCenterStripedProps & RefAttributes<Svg>>;

export default TabMinusCenterStriped;
export { TabMinusCenterStriped };

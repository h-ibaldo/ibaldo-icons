import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabMinusCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabMinusCenter: ForwardRefExoticComponent<TabMinusCenterProps & RefAttributes<Svg>>;

export default TabMinusCenter;
export { TabMinusCenter };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabCheckCircle: ForwardRefExoticComponent<TabCheckCircleProps & RefAttributes<Svg>>;

export default TabCheckCircle;
export { TabCheckCircle };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabMinusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabMinusCircle: ForwardRefExoticComponent<TabMinusCircleProps & RefAttributes<Svg>>;

export default TabMinusCircle;
export { TabMinusCircle };

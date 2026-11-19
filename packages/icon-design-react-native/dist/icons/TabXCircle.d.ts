import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabXCircle: ForwardRefExoticComponent<TabXCircleProps & RefAttributes<Svg>>;

export default TabXCircle;
export { TabXCircle };

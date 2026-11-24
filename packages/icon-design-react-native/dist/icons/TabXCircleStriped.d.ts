import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabXCircleStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabXCircleStriped: ForwardRefExoticComponent<TabXCircleStripedProps & RefAttributes<Svg>>;

export default TabXCircleStriped;
export { TabXCircleStriped };

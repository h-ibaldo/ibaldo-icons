import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabChevronDoubleRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabChevronDoubleRight: ForwardRefExoticComponent<TabChevronDoubleRightProps & RefAttributes<Svg>>;

export default TabChevronDoubleRight;
export { TabChevronDoubleRight };

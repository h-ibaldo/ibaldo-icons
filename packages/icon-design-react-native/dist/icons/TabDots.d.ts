import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabDots: ForwardRefExoticComponent<TabDotsProps & RefAttributes<Svg>>;

export default TabDots;
export { TabDots };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabTitleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabTitle: ForwardRefExoticComponent<TabTitleProps & RefAttributes<Svg>>;

export default TabTitle;
export { TabTitle };

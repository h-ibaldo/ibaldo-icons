import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabArrowLeftXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabArrowLeftX: ForwardRefExoticComponent<TabArrowLeftXProps & RefAttributes<Svg>>;

export default TabArrowLeftX;
export { TabArrowLeftX };

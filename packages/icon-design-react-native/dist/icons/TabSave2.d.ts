import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabSave2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabSave2: ForwardRefExoticComponent<TabSave2Props & RefAttributes<Svg>>;

export default TabSave2;
export { TabSave2 };

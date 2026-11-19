import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabSaveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabSave: ForwardRefExoticComponent<TabSaveProps & RefAttributes<Svg>>;

export default TabSave;
export { TabSave };

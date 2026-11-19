import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabFolderOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabFolderOpen: ForwardRefExoticComponent<TabFolderOpenProps & RefAttributes<Svg>>;

export default TabFolderOpen;
export { TabFolderOpen };

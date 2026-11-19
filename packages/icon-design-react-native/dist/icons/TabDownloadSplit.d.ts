import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabDownloadSplitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabDownloadSplit: ForwardRefExoticComponent<TabDownloadSplitProps & RefAttributes<Svg>>;

export default TabDownloadSplit;
export { TabDownloadSplit };

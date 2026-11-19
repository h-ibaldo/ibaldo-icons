import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabDownloadSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabDownloadSharp: ForwardRefExoticComponent<TabDownloadSharpProps & RefAttributes<Svg>>;

export default TabDownloadSharp;
export { TabDownloadSharp };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowDownloadCenterPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowDownloadCenterPlain: ForwardRefExoticComponent<WindowDownloadCenterPlainProps & RefAttributes<Svg>>;

export default WindowDownloadCenterPlain;
export { WindowDownloadCenterPlain };

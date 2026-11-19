import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowDownloadPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowDownloadPlain: ForwardRefExoticComponent<WindowDownloadPlainProps & RefAttributes<Svg>>;

export default WindowDownloadPlain;
export { WindowDownloadPlain };

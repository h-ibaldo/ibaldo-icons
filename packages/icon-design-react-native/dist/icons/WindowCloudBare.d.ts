import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowCloudBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowCloudBare: ForwardRefExoticComponent<WindowCloudBareProps & RefAttributes<Svg>>;

export default WindowCloudBare;
export { WindowCloudBare };

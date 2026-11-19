import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowCloudPuffyBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowCloudPuffyBare: ForwardRefExoticComponent<WindowCloudPuffyBareProps & RefAttributes<Svg>>;

export default WindowCloudPuffyBare;
export { WindowCloudPuffyBare };

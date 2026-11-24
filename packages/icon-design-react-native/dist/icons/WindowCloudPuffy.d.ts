import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowCloudPuffyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowCloudPuffy: ForwardRefExoticComponent<WindowCloudPuffyProps & RefAttributes<Svg>>;

export default WindowCloudPuffy;
export { WindowCloudPuffy };

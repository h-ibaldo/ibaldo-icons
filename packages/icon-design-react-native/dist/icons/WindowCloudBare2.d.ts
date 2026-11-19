import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowCloudBare2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowCloudBare2: ForwardRefExoticComponent<WindowCloudBare2Props & RefAttributes<Svg>>;

export default WindowCloudBare2;
export { WindowCloudBare2 };

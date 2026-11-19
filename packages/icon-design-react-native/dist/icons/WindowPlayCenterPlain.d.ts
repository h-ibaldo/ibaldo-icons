import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowPlayCenterPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowPlayCenterPlain: ForwardRefExoticComponent<WindowPlayCenterPlainProps & RefAttributes<Svg>>;

export default WindowPlayCenterPlain;
export { WindowPlayCenterPlain };

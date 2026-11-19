import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowXCenterPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowXCenterPlain: ForwardRefExoticComponent<WindowXCenterPlainProps & RefAttributes<Svg>>;

export default WindowXCenterPlain;
export { WindowXCenterPlain };

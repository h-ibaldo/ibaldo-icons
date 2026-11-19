import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowGlobeMapPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowGlobeMapPlain: ForwardRefExoticComponent<WindowGlobeMapPlainProps & RefAttributes<Svg>>;

export default WindowGlobeMapPlain;
export { WindowGlobeMapPlain };

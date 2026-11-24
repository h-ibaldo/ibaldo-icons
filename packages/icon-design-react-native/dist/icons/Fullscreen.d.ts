import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FullscreenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Fullscreen: ForwardRefExoticComponent<FullscreenProps & RefAttributes<Svg>>;

export default Fullscreen;
export { Fullscreen };

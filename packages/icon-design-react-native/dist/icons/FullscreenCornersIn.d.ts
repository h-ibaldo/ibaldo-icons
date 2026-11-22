import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FullscreenCornersInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FullscreenCornersIn: ForwardRefExoticComponent<FullscreenCornersInProps & RefAttributes<Svg>>;

export default FullscreenCornersIn;
export { FullscreenCornersIn };

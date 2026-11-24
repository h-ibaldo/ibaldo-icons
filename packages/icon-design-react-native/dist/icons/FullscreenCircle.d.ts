import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FullscreenCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FullscreenCircle: ForwardRefExoticComponent<FullscreenCircleProps & RefAttributes<Svg>>;

export default FullscreenCircle;
export { FullscreenCircle };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowKeyDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowKeyDot: ForwardRefExoticComponent<WindowKeyDotProps & RefAttributes<Svg>>;

export default WindowKeyDot;
export { WindowKeyDot };

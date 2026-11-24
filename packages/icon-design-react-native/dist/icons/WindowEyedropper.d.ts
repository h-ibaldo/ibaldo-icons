import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowEyedropperProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowEyedropper: ForwardRefExoticComponent<WindowEyedropperProps & RefAttributes<Svg>>;

export default WindowEyedropper;
export { WindowEyedropper };

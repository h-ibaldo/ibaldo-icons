import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenShareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenShare: ForwardRefExoticComponent<ScreenShareProps & RefAttributes<Svg>>;

export default ScreenShare;
export { ScreenShare };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoPauseLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoPauseLarge: ForwardRefExoticComponent<VideoPauseLargeProps & RefAttributes<Svg>>;

export default VideoPauseLarge;
export { VideoPauseLarge };

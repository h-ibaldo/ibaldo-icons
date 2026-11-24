import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudCheckCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudCheckCorner: ForwardRefExoticComponent<CloudCheckCornerProps & RefAttributes<Svg>>;

export default CloudCheckCorner;
export { CloudCheckCorner };

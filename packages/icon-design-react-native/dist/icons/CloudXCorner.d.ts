import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudXCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudXCorner: ForwardRefExoticComponent<CloudXCornerProps & RefAttributes<Svg>>;

export default CloudXCorner;
export { CloudXCorner };

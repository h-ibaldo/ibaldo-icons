import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WebcamProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Webcam: ForwardRefExoticComponent<WebcamProps & RefAttributes<Svg>>;

export default Webcam;
export { Webcam };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WebcamOffSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WebcamOffSquare: ForwardRefExoticComponent<WebcamOffSquareProps & RefAttributes<Svg>>;

export default WebcamOffSquare;
export { WebcamOffSquare };

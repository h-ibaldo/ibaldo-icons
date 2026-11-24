import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WebcamOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WebcamOff: ForwardRefExoticComponent<WebcamOffProps & RefAttributes<Svg>>;

export default WebcamOff;
export { WebcamOff };

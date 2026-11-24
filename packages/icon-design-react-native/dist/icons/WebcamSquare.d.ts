import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WebcamSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WebcamSquare: ForwardRefExoticComponent<WebcamSquareProps & RefAttributes<Svg>>;

export default WebcamSquare;
export { WebcamSquare };

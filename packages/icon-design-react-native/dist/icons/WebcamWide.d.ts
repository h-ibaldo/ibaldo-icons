import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WebcamWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WebcamWide: ForwardRefExoticComponent<WebcamWideProps & RefAttributes<Svg>>;

export default WebcamWide;
export { WebcamWide };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WebcamRingWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WebcamRingWide: ForwardRefExoticComponent<WebcamRingWideProps & RefAttributes<Svg>>;

export default WebcamRingWide;
export { WebcamRingWide };

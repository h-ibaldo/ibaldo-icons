import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RotateScreenSpeakerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RotateScreenSpeaker: ForwardRefExoticComponent<RotateScreenSpeakerProps & RefAttributes<Svg>>;

export default RotateScreenSpeaker;
export { RotateScreenSpeaker };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MicrophonePlayCircleBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MicrophonePlayCircleBare: ForwardRefExoticComponent<MicrophonePlayCircleBareProps & RefAttributes<Svg>>;

export default MicrophonePlayCircleBare;
export { MicrophonePlayCircleBare };

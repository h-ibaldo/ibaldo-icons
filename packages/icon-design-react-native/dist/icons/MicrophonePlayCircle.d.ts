import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MicrophonePlayCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MicrophonePlayCircle: ForwardRefExoticComponent<MicrophonePlayCircleProps & RefAttributes<Svg>>;

export default MicrophonePlayCircle;
export { MicrophonePlayCircle };

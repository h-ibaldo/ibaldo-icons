import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MicrophonePlayCircleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MicrophonePlayCircleBoxy: ForwardRefExoticComponent<MicrophonePlayCircleBoxyProps & RefAttributes<Svg>>;

export default MicrophonePlayCircleBoxy;
export { MicrophonePlayCircleBoxy };

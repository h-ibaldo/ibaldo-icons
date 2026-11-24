import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MicrophoneOffBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MicrophoneOffBoxy: ForwardRefExoticComponent<MicrophoneOffBoxyProps & RefAttributes<Svg>>;

export default MicrophoneOffBoxy;
export { MicrophoneOffBoxy };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MicrophoneOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MicrophoneOff: ForwardRefExoticComponent<MicrophoneOffProps & RefAttributes<Svg>>;

export default MicrophoneOff;
export { MicrophoneOff };

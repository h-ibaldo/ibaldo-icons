import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MicrophoneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Microphone: ForwardRefExoticComponent<MicrophoneProps & RefAttributes<Svg>>;

export default Microphone;
export { Microphone };

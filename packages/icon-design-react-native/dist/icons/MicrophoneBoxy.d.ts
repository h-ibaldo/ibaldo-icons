import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MicrophoneBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MicrophoneBoxy: ForwardRefExoticComponent<MicrophoneBoxyProps & RefAttributes<Svg>>;

export default MicrophoneBoxy;
export { MicrophoneBoxy };

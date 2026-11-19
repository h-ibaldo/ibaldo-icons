import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MicrophoneOffBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MicrophoneOffBare: ForwardRefExoticComponent<MicrophoneOffBareProps & RefAttributes<Svg>>;

export default MicrophoneOffBare;
export { MicrophoneOffBare };

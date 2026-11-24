import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MicrophoneGrilleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MicrophoneGrille: ForwardRefExoticComponent<MicrophoneGrilleProps & RefAttributes<Svg>>;

export default MicrophoneGrille;
export { MicrophoneGrille };

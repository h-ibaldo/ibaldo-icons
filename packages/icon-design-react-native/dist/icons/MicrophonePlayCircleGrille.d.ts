import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MicrophonePlayCircleGrilleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MicrophonePlayCircleGrille: ForwardRefExoticComponent<MicrophonePlayCircleGrilleProps & RefAttributes<Svg>>;

export default MicrophonePlayCircleGrille;
export { MicrophonePlayCircleGrille };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MicrophoneBanGrilleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MicrophoneBanGrille: ForwardRefExoticComponent<MicrophoneBanGrilleProps & RefAttributes<Svg>>;

export default MicrophoneBanGrille;
export { MicrophoneBanGrille };

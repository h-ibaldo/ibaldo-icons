import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MicrophoneBanBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MicrophoneBanBare: ForwardRefExoticComponent<MicrophoneBanBareProps & RefAttributes<Svg>>;

export default MicrophoneBanBare;
export { MicrophoneBanBare };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MicrophoneBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MicrophoneBare: ForwardRefExoticComponent<MicrophoneBareProps & RefAttributes<Svg>>;

export default MicrophoneBare;
export { MicrophoneBare };

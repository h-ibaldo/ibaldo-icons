import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadCurlyBobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadCurlyBob: ForwardRefExoticComponent<AvatarHeadCurlyBobProps & RefAttributes<Svg>>;

export default AvatarHeadCurlyBob;
export { AvatarHeadCurlyBob };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadBluntBobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadBluntBob: ForwardRefExoticComponent<AvatarHeadBluntBobProps & RefAttributes<Svg>>;

export default AvatarHeadBluntBob;
export { AvatarHeadBluntBob };

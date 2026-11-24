import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceLongWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceLongWavy: ForwardRefExoticComponent<AvatarFaceLongWavyProps & RefAttributes<Svg>>;

export default AvatarFaceLongWavy;
export { AvatarFaceLongWavy };

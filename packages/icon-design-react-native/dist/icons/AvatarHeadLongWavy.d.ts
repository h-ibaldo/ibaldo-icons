import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadLongWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadLongWavy: ForwardRefExoticComponent<AvatarHeadLongWavyProps & RefAttributes<Svg>>;

export default AvatarHeadLongWavy;
export { AvatarHeadLongWavy };

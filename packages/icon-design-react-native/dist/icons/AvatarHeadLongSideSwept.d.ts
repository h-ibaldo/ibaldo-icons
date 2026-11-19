import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadLongSideSweptProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadLongSideSwept: ForwardRefExoticComponent<AvatarHeadLongSideSweptProps & RefAttributes<Svg>>;

export default AvatarHeadLongSideSwept;
export { AvatarHeadLongSideSwept };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileHeartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileHeart: ForwardRefExoticComponent<MobileHeartProps & RefAttributes<Svg>>;

export default MobileHeart;
export { MobileHeart };

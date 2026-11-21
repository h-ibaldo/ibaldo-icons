import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GiftBowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GiftBow: ForwardRefExoticComponent<GiftBowProps & RefAttributes<Svg>>;

export default GiftBow;
export { GiftBow };

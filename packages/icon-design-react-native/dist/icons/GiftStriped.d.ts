import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GiftStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GiftStriped: ForwardRefExoticComponent<GiftStripedProps & RefAttributes<Svg>>;

export default GiftStriped;
export { GiftStriped };

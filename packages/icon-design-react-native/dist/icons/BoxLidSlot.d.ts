import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxLidSlotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxLidSlot: ForwardRefExoticComponent<BoxLidSlotProps & RefAttributes<Svg>>;

export default BoxLidSlot;
export { BoxLidSlot };

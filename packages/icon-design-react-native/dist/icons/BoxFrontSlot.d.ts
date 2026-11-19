import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxFrontSlotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxFrontSlot: ForwardRefExoticComponent<BoxFrontSlotProps & RefAttributes<Svg>>;

export default BoxFrontSlot;
export { BoxFrontSlot };

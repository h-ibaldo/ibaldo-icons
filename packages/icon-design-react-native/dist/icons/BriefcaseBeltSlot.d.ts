import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseBeltSlotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseBeltSlot: ForwardRefExoticComponent<BriefcaseBeltSlotProps & RefAttributes<Svg>>;

export default BriefcaseBeltSlot;
export { BriefcaseBeltSlot };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketPercentSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketPercentSlim: ForwardRefExoticComponent<TicketPercentSlimProps & RefAttributes<Svg>>;

export default TicketPercentSlim;
export { TicketPercentSlim };

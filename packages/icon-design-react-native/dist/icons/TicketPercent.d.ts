import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketPercentProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketPercent: ForwardRefExoticComponent<TicketPercentProps & RefAttributes<Svg>>;

export default TicketPercent;
export { TicketPercent };

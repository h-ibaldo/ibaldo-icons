import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketPercentTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketPercentTall: ForwardRefExoticComponent<TicketPercentTallProps & RefAttributes<Svg>>;

export default TicketPercentTall;
export { TicketPercentTall };

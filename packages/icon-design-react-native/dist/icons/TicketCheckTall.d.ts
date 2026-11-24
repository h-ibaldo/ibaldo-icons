import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketCheckTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketCheckTall: ForwardRefExoticComponent<TicketCheckTallProps & RefAttributes<Svg>>;

export default TicketCheckTall;
export { TicketCheckTall };

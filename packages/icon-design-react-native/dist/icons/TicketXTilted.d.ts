import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketXTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketXTilted: ForwardRefExoticComponent<TicketXTiltedProps & RefAttributes<Svg>>;

export default TicketXTilted;
export { TicketXTilted };

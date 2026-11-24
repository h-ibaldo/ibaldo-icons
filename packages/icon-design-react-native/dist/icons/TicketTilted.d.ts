import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketTilted: ForwardRefExoticComponent<TicketTiltedProps & RefAttributes<Svg>>;

export default TicketTilted;
export { TicketTilted };

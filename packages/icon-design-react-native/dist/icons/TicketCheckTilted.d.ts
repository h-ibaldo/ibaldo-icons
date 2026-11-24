import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketCheckTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketCheckTilted: ForwardRefExoticComponent<TicketCheckTiltedProps & RefAttributes<Svg>>;

export default TicketCheckTilted;
export { TicketCheckTilted };

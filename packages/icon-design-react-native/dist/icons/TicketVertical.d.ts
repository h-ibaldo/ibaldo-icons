import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketVertical: ForwardRefExoticComponent<TicketVerticalProps & RefAttributes<Svg>>;

export default TicketVertical;
export { TicketVertical };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketMinusTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketMinusTall: ForwardRefExoticComponent<TicketMinusTallProps & RefAttributes<Svg>>;

export default TicketMinusTall;
export { TicketMinusTall };

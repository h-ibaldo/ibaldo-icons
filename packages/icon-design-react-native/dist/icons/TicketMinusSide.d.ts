import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketMinusSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketMinusSide: ForwardRefExoticComponent<TicketMinusSideProps & RefAttributes<Svg>>;

export default TicketMinusSide;
export { TicketMinusSide };

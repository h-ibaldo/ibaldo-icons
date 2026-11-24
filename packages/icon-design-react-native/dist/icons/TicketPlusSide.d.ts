import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketPlusSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketPlusSide: ForwardRefExoticComponent<TicketPlusSideProps & RefAttributes<Svg>>;

export default TicketPlusSide;
export { TicketPlusSide };

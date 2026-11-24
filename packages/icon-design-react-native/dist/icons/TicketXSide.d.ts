import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketXSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketXSide: ForwardRefExoticComponent<TicketXSideProps & RefAttributes<Svg>>;

export default TicketXSide;
export { TicketXSide };

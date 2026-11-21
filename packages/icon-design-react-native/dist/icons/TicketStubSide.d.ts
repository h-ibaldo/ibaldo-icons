import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketStubSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketStubSide: ForwardRefExoticComponent<TicketStubSideProps & RefAttributes<Svg>>;

export default TicketStubSide;
export { TicketStubSide };

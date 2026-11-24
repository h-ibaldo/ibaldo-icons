import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketStubProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketStub: ForwardRefExoticComponent<TicketStubProps & RefAttributes<Svg>>;

export default TicketStub;
export { TicketStub };

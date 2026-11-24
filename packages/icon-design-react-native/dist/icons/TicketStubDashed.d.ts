import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketStubDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketStubDashed: ForwardRefExoticComponent<TicketStubDashedProps & RefAttributes<Svg>>;

export default TicketStubDashed;
export { TicketStubDashed };

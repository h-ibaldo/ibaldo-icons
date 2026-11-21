import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketStubDashedSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketStubDashedSide: ForwardRefExoticComponent<TicketStubDashedSideProps & RefAttributes<Svg>>;

export default TicketStubDashedSide;
export { TicketStubDashedSide };

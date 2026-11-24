import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketMinus: ForwardRefExoticComponent<TicketMinusProps & RefAttributes<Svg>>;

export default TicketMinus;
export { TicketMinus };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketCheckSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketCheckSide: ForwardRefExoticComponent<TicketCheckSideProps & RefAttributes<Svg>>;

export default TicketCheckSide;
export { TicketCheckSide };

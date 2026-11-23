import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketPercentSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketPercentSide: ForwardRefExoticComponent<TicketPercentSideProps & RefAttributes<Svg>>;

export default TicketPercentSide;
export { TicketPercentSide };

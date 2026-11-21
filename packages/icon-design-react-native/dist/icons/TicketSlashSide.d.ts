import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketSlashSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketSlashSide: ForwardRefExoticComponent<TicketSlashSideProps & RefAttributes<Svg>>;

export default TicketSlashSide;
export { TicketSlashSide };

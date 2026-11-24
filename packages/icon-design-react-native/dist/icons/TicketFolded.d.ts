import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketFoldedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketFolded: ForwardRefExoticComponent<TicketFoldedProps & RefAttributes<Svg>>;

export default TicketFolded;
export { TicketFolded };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketCheckFoldedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketCheckFolded: ForwardRefExoticComponent<TicketCheckFoldedProps & RefAttributes<Svg>>;

export default TicketCheckFolded;
export { TicketCheckFolded };

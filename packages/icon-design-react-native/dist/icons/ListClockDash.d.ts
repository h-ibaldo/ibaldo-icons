import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListClockDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListClockDash: ForwardRefExoticComponent<ListClockDashProps & RefAttributes<Svg>>;

export default ListClockDash;
export { ListClockDash };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListXDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListXDash: ForwardRefExoticComponent<ListXDashProps & RefAttributes<Svg>>;

export default ListXDash;
export { ListXDash };

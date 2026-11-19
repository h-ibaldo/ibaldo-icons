import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListUserSmallDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListUserSmallDash: ForwardRefExoticComponent<ListUserSmallDashProps & RefAttributes<Svg>>;

export default ListUserSmallDash;
export { ListUserSmallDash };

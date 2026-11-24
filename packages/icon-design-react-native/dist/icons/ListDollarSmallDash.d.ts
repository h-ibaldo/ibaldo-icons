import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListDollarSmallDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListDollarSmallDash: ForwardRefExoticComponent<ListDollarSmallDashProps & RefAttributes<Svg>>;

export default ListDollarSmallDash;
export { ListDollarSmallDash };

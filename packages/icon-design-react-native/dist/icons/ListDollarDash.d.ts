import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListDollarDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListDollarDash: ForwardRefExoticComponent<ListDollarDashProps & RefAttributes<Svg>>;

export default ListDollarDash;
export { ListDollarDash };

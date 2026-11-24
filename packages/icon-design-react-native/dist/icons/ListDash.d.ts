import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListDash: ForwardRefExoticComponent<ListDashProps & RefAttributes<Svg>>;

export default ListDash;
export { ListDash };

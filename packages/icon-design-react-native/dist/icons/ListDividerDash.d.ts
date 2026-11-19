import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListDividerDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListDividerDash: ForwardRefExoticComponent<ListDividerDashProps & RefAttributes<Svg>>;

export default ListDividerDash;
export { ListDividerDash };

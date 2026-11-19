import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListRightDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListRightDash: ForwardRefExoticComponent<ListRightDashProps & RefAttributes<Svg>>;

export default ListRightDash;
export { ListRightDash };

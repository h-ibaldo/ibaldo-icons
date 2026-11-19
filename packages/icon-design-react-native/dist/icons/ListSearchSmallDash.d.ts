import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListSearchSmallDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListSearchSmallDash: ForwardRefExoticComponent<ListSearchSmallDashProps & RefAttributes<Svg>>;

export default ListSearchSmallDash;
export { ListSearchSmallDash };

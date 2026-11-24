import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListHeartDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListHeartDash: ForwardRefExoticComponent<ListHeartDashProps & RefAttributes<Svg>>;

export default ListHeartDash;
export { ListHeartDash };

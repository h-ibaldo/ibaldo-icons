import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListEditDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListEditDash: ForwardRefExoticComponent<ListEditDashProps & RefAttributes<Svg>>;

export default ListEditDash;
export { ListEditDash };

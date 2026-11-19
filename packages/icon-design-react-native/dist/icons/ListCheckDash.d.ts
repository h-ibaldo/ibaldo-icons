import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListCheckDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListCheckDash: ForwardRefExoticComponent<ListCheckDashProps & RefAttributes<Svg>>;

export default ListCheckDash;
export { ListCheckDash };

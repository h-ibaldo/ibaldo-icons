import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListStatusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListStatus: ForwardRefExoticComponent<ListStatusProps & RefAttributes<Svg>>;

export default ListStatus;
export { ListStatus };

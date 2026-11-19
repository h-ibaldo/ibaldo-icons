import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListXSquareCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListXSquareCenter: ForwardRefExoticComponent<ListXSquareCenterProps & RefAttributes<Svg>>;

export default ListXSquareCenter;
export { ListXSquareCenter };

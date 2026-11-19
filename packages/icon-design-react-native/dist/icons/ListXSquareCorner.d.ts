import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListXSquareCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListXSquareCorner: ForwardRefExoticComponent<ListXSquareCornerProps & RefAttributes<Svg>>;

export default ListXSquareCorner;
export { ListXSquareCorner };

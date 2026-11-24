import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListXSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListXSquare: ForwardRefExoticComponent<ListXSquareProps & RefAttributes<Svg>>;

export default ListXSquare;
export { ListXSquare };

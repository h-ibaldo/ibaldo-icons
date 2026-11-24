import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListCheckSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListCheckSquare: ForwardRefExoticComponent<ListCheckSquareProps & RefAttributes<Svg>>;

export default ListCheckSquare;
export { ListCheckSquare };

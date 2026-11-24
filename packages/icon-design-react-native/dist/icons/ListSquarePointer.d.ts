import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListSquarePointerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListSquarePointer: ForwardRefExoticComponent<ListSquarePointerProps & RefAttributes<Svg>>;

export default ListSquarePointer;
export { ListSquarePointer };

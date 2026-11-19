import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListCirclePointerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListCirclePointer: ForwardRefExoticComponent<ListCirclePointerProps & RefAttributes<Svg>>;

export default ListCirclePointer;
export { ListCirclePointer };

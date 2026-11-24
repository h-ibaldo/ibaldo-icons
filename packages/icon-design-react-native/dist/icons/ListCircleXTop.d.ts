import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListCircleXTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListCircleXTop: ForwardRefExoticComponent<ListCircleXTopProps & RefAttributes<Svg>>;

export default ListCircleXTop;
export { ListCircleXTop };

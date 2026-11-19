import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListCircleXBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListCircleXBottom: ForwardRefExoticComponent<ListCircleXBottomProps & RefAttributes<Svg>>;

export default ListCircleXBottom;
export { ListCircleXBottom };

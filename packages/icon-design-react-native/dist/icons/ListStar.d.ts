import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListStarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListStar: ForwardRefExoticComponent<ListStarProps & RefAttributes<Svg>>;

export default ListStar;
export { ListStar };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListTreeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListTree: ForwardRefExoticComponent<ListTreeProps & RefAttributes<Svg>>;

export default ListTree;
export { ListTree };

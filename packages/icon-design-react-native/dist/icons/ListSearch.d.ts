import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListSearch: ForwardRefExoticComponent<ListSearchProps & RefAttributes<Svg>>;

export default ListSearch;
export { ListSearch };

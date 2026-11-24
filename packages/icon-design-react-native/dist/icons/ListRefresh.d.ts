import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListRefreshProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListRefresh: ForwardRefExoticComponent<ListRefreshProps & RefAttributes<Svg>>;

export default ListRefresh;
export { ListRefresh };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListSync: ForwardRefExoticComponent<ListSyncProps & RefAttributes<Svg>>;

export default ListSync;
export { ListSync };

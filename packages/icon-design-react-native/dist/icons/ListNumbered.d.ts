import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListNumberedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListNumbered: ForwardRefExoticComponent<ListNumberedProps & RefAttributes<Svg>>;

export default ListNumbered;
export { ListNumbered };

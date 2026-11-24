import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListChevronLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListChevronLeft: ForwardRefExoticComponent<ListChevronLeftProps & RefAttributes<Svg>>;

export default ListChevronLeft;
export { ListChevronLeft };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListChevronUpDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListChevronUpDown: ForwardRefExoticComponent<ListChevronUpDownProps & RefAttributes<Svg>>;

export default ListChevronUpDown;
export { ListChevronUpDown };

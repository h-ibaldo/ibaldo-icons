import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListChevronDownUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListChevronDownUp: ForwardRefExoticComponent<ListChevronDownUpProps & RefAttributes<Svg>>;

export default ListChevronDownUp;
export { ListChevronDownUp };

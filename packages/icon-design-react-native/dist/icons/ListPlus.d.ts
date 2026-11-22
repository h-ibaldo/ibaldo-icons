import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListPlus: ForwardRefExoticComponent<ListPlusProps & RefAttributes<Svg>>;

export default ListPlus;
export { ListPlus };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListGroupsDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListGroupsDash: ForwardRefExoticComponent<ListGroupsDashProps & RefAttributes<Svg>>;

export default ListGroupsDash;
export { ListGroupsDash };

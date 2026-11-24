import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListSearchXSDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListSearchXSDash: ForwardRefExoticComponent<ListSearchXSDashProps & RefAttributes<Svg>>;

export default ListSearchXSDash;
export { ListSearchXSDash };

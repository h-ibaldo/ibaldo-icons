import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListMinusDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListMinusDash: ForwardRefExoticComponent<ListMinusDashProps & RefAttributes<Svg>>;

export default ListMinusDash;
export { ListMinusDash };

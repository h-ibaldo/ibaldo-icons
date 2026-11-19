import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListBulletsLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListBulletsLarge: ForwardRefExoticComponent<ListBulletsLargeProps & RefAttributes<Svg>>;

export default ListBulletsLarge;
export { ListBulletsLarge };

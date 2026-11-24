import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListBulletsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListBullets: ForwardRefExoticComponent<ListBulletsProps & RefAttributes<Svg>>;

export default ListBullets;
export { ListBullets };

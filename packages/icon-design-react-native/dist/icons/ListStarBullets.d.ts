import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListStarBulletsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListStarBullets: ForwardRefExoticComponent<ListStarBulletsProps & RefAttributes<Svg>>;

export default ListStarBullets;
export { ListStarBullets };

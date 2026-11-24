import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListXBulletsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListXBullets: ForwardRefExoticComponent<ListXBulletsProps & RefAttributes<Svg>>;

export default ListXBullets;
export { ListXBullets };

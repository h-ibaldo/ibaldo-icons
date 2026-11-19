import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListSearchRingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListSearchRing: ForwardRefExoticComponent<ListSearchRingProps & RefAttributes<Svg>>;

export default ListSearchRing;
export { ListSearchRing };

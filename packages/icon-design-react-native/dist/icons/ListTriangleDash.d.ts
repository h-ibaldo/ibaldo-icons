import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListTriangleDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListTriangleDash: ForwardRefExoticComponent<ListTriangleDashProps & RefAttributes<Svg>>;

export default ListTriangleDash;
export { ListTriangleDash };

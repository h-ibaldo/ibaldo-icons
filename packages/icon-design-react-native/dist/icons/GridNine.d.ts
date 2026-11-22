import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GridNineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GridNine: ForwardRefExoticComponent<GridNineProps & RefAttributes<Svg>>;

export default GridNine;
export { GridNine };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GridRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GridRounded: ForwardRefExoticComponent<GridRoundedProps & RefAttributes<Svg>>;

export default GridRounded;
export { GridRounded };

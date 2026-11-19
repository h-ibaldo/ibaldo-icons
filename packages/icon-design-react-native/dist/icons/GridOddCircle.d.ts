import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GridOddCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GridOddCircle: ForwardRefExoticComponent<GridOddCircleProps & RefAttributes<Svg>>;

export default GridOddCircle;
export { GridOddCircle };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GridCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GridCircle: ForwardRefExoticComponent<GridCircleProps & RefAttributes<Svg>>;

export default GridCircle;
export { GridCircle };

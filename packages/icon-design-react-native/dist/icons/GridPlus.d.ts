import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GridPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GridPlus: ForwardRefExoticComponent<GridPlusProps & RefAttributes<Svg>>;

export default GridPlus;
export { GridPlus };

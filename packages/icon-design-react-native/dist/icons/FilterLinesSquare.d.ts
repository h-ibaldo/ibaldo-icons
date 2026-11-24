import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilterLinesSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilterLinesSquare: ForwardRefExoticComponent<FilterLinesSquareProps & RefAttributes<Svg>>;

export default FilterLinesSquare;
export { FilterLinesSquare };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilterLinesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilterLines: ForwardRefExoticComponent<FilterLinesProps & RefAttributes<Svg>>;

export default FilterLines;
export { FilterLines };

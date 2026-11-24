import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilterLinesShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilterLinesShort: ForwardRefExoticComponent<FilterLinesShortProps & RefAttributes<Svg>>;

export default FilterLinesShort;
export { FilterLinesShort };

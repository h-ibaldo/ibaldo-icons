import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilterLinesPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilterLinesPlus: ForwardRefExoticComponent<FilterLinesPlusProps & RefAttributes<Svg>>;

export default FilterLinesPlus;
export { FilterLinesPlus };

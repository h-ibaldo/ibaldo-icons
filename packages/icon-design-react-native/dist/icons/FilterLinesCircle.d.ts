import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilterLinesCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilterLinesCircle: ForwardRefExoticComponent<FilterLinesCircleProps & RefAttributes<Svg>>;

export default FilterLinesCircle;
export { FilterLinesCircle };

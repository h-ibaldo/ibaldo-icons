import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilterLinesWideCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilterLinesWideCircle: ForwardRefExoticComponent<FilterLinesWideCircleProps & RefAttributes<Svg>>;

export default FilterLinesWideCircle;
export { FilterLinesWideCircle };

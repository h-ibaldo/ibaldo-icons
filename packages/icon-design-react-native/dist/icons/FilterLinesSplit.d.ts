import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilterLinesSplitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilterLinesSplit: ForwardRefExoticComponent<FilterLinesSplitProps & RefAttributes<Svg>>;

export default FilterLinesSplit;
export { FilterLinesSplit };

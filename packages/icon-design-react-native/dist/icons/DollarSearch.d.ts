import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DollarSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DollarSearch: ForwardRefExoticComponent<DollarSearchProps & RefAttributes<Svg>>;

export default DollarSearch;
export { DollarSearch };

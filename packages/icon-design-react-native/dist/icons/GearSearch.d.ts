import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearSearch: ForwardRefExoticComponent<GearSearchProps & RefAttributes<Svg>>;

export default GearSearch;
export { GearSearch };

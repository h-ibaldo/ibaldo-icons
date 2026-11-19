import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockSearch: ForwardRefExoticComponent<ClockSearchProps & RefAttributes<Svg>>;

export default ClockSearch;
export { ClockSearch };

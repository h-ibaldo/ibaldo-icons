import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PinSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PinSearch: ForwardRefExoticComponent<PinSearchProps & RefAttributes<Svg>>;

export default PinSearch;
export { PinSearch };

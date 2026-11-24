import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanSearch: ForwardRefExoticComponent<ScanSearchProps & RefAttributes<Svg>>;

export default ScanSearch;
export { ScanSearch };

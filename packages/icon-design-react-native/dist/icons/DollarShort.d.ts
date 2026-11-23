import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DollarShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DollarShort: ForwardRefExoticComponent<DollarShortProps & RefAttributes<Svg>>;

export default DollarShort;
export { DollarShort };

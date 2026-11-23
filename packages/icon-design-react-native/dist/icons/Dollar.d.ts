import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DollarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Dollar: ForwardRefExoticComponent<DollarProps & RefAttributes<Svg>>;

export default Dollar;
export { Dollar };

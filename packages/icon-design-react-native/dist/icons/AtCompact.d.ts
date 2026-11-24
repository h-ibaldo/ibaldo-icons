import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtCompact: ForwardRefExoticComponent<AtCompactProps & RefAttributes<Svg>>;

export default AtCompact;
export { AtCompact };

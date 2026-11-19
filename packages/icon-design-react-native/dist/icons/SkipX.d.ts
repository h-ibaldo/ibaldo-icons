import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipX: ForwardRefExoticComponent<SkipXProps & RefAttributes<Svg>>;

export default SkipX;
export { SkipX };

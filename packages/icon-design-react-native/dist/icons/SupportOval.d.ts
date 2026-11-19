import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SupportOvalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SupportOval: ForwardRefExoticComponent<SupportOvalProps & RefAttributes<Svg>>;

export default SupportOval;
export { SupportOval };

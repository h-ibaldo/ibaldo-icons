import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RegexProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Regex: ForwardRefExoticComponent<RegexProps & RefAttributes<Svg>>;

export default Regex;
export { Regex };

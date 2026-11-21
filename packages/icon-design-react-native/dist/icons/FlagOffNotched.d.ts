import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlagOffNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlagOffNotched: ForwardRefExoticComponent<FlagOffNotchedProps & RefAttributes<Svg>>;

export default FlagOffNotched;
export { FlagOffNotched };

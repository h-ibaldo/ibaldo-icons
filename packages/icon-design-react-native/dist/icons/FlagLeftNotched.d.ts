import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlagLeftNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlagLeftNotched: ForwardRefExoticComponent<FlagLeftNotchedProps & RefAttributes<Svg>>;

export default FlagLeftNotched;
export { FlagLeftNotched };

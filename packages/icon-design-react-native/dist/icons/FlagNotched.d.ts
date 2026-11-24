import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlagNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlagNotched: ForwardRefExoticComponent<FlagNotchedProps & RefAttributes<Svg>>;

export default FlagNotched;
export { FlagNotched };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OverscanProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Overscan: ForwardRefExoticComponent<OverscanProps & RefAttributes<Svg>>;

export default Overscan;
export { Overscan };

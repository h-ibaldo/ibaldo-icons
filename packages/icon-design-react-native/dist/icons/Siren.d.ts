import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SirenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Siren: ForwardRefExoticComponent<SirenProps & RefAttributes<Svg>>;

export default Siren;
export { Siren };

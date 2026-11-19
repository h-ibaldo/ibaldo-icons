import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlaqueProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Plaque: ForwardRefExoticComponent<PlaqueProps & RefAttributes<Svg>>;

export default Plaque;
export { Plaque };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RosetteProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Rosette: ForwardRefExoticComponent<RosetteProps & RefAttributes<Svg>>;

export default Rosette;
export { Rosette };

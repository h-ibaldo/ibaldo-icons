import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchForceProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchForce: ForwardRefExoticComponent<TouchForceProps & RefAttributes<Svg>>;

export default TouchForce;
export { TouchForce };

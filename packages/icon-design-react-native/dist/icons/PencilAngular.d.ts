import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilAngularProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilAngular: ForwardRefExoticComponent<PencilAngularProps & RefAttributes<Svg>>;

export default PencilAngular;
export { PencilAngular };

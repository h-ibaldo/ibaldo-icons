import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilUnderlineAngularProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilUnderlineAngular: ForwardRefExoticComponent<PencilUnderlineAngularProps & RefAttributes<Svg>>;

export default PencilUnderlineAngular;
export { PencilUnderlineAngular };

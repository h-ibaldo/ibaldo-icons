import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilCurved: ForwardRefExoticComponent<PencilCurvedProps & RefAttributes<Svg>>;

export default PencilCurved;
export { PencilCurved };

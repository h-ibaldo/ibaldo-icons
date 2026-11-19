import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilUnderlineCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilUnderlineCurved: ForwardRefExoticComponent<PencilUnderlineCurvedProps & RefAttributes<Svg>>;

export default PencilUnderlineCurved;
export { PencilUnderlineCurved };

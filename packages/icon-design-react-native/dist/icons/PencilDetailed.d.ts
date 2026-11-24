import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilDetailedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilDetailed: ForwardRefExoticComponent<PencilDetailedProps & RefAttributes<Svg>>;

export default PencilDetailed;
export { PencilDetailed };

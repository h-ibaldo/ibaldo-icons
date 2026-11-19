import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilUnderlineDetailedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilUnderlineDetailed: ForwardRefExoticComponent<PencilUnderlineDetailedProps & RefAttributes<Svg>>;

export default PencilUnderlineDetailed;
export { PencilUnderlineDetailed };

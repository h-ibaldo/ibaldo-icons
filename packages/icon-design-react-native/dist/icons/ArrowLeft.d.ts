import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeft: ForwardRefExoticComponent<ArrowLeftProps & RefAttributes<Svg>>;

export default ArrowLeft;
export { ArrowLeft };

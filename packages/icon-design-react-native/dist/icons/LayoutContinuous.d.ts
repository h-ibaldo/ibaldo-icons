import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutContinuousProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutContinuous: ForwardRefExoticComponent<LayoutContinuousProps & RefAttributes<Svg>>;

export default LayoutContinuous;
export { LayoutContinuous };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunCircleSplitSparseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunCircleSplitSparse: ForwardRefExoticComponent<SunCircleSplitSparseProps & RefAttributes<Svg>>;

export default SunCircleSplitSparse;
export { SunCircleSplitSparse };

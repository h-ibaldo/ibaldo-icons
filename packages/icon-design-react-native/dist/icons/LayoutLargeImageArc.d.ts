import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutLargeImageArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutLargeImageArc: ForwardRefExoticComponent<LayoutLargeImageArcProps & RefAttributes<Svg>>;

export default LayoutLargeImageArc;
export { LayoutLargeImageArc };

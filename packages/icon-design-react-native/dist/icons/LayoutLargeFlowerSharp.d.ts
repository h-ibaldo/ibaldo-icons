import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutLargeFlowerSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutLargeFlowerSharp: ForwardRefExoticComponent<LayoutLargeFlowerSharpProps & RefAttributes<Svg>>;

export default LayoutLargeFlowerSharp;
export { LayoutLargeFlowerSharp };

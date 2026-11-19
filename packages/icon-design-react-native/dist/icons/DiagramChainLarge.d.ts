import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DiagramChainLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DiagramChainLarge: ForwardRefExoticComponent<DiagramChainLargeProps & RefAttributes<Svg>>;

export default DiagramChainLarge;
export { DiagramChainLarge };

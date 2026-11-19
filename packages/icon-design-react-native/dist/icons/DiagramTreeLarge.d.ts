import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DiagramTreeLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DiagramTreeLarge: ForwardRefExoticComponent<DiagramTreeLargeProps & RefAttributes<Svg>>;

export default DiagramTreeLarge;
export { DiagramTreeLarge };

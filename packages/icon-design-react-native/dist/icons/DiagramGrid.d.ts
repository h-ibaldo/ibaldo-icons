import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DiagramGridProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DiagramGrid: ForwardRefExoticComponent<DiagramGridProps & RefAttributes<Svg>>;

export default DiagramGrid;
export { DiagramGrid };

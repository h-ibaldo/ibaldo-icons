import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DiagramMindMapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DiagramMindMap: ForwardRefExoticComponent<DiagramMindMapProps & RefAttributes<Svg>>;

export default DiagramMindMap;
export { DiagramMindMap };

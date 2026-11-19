import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DiagramTreeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DiagramTree: ForwardRefExoticComponent<DiagramTreeProps & RefAttributes<Svg>>;

export default DiagramTree;
export { DiagramTree };

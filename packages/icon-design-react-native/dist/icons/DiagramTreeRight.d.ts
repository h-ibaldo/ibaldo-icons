import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DiagramTreeRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DiagramTreeRight: ForwardRefExoticComponent<DiagramTreeRightProps & RefAttributes<Svg>>;

export default DiagramTreeRight;
export { DiagramTreeRight };

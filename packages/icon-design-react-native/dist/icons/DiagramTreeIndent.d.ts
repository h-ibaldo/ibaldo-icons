import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DiagramTreeIndentProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DiagramTreeIndent: ForwardRefExoticComponent<DiagramTreeIndentProps & RefAttributes<Svg>>;

export default DiagramTreeIndent;
export { DiagramTreeIndent };

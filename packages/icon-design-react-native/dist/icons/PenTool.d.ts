import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PenToolProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PenTool: ForwardRefExoticComponent<PenToolProps & RefAttributes<Svg>>;

export default PenTool;
export { PenTool };

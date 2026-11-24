import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DragArrowUpLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DragArrowUpLeft: ForwardRefExoticComponent<DragArrowUpLeftProps & RefAttributes<Svg>>;

export default DragArrowUpLeft;
export { DragArrowUpLeft };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutBlocksProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutBlocks: ForwardRefExoticComponent<LayoutBlocksProps & RefAttributes<Svg>>;

export default LayoutBlocks;
export { LayoutBlocks };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AdjustBlockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AdjustBlock: ForwardRefExoticComponent<AdjustBlockProps & RefAttributes<Svg>>;

export default AdjustBlock;
export { AdjustBlock };

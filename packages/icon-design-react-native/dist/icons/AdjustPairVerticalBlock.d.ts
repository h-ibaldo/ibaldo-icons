import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AdjustPairVerticalBlockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AdjustPairVerticalBlock: ForwardRefExoticComponent<AdjustPairVerticalBlockProps & RefAttributes<Svg>>;

export default AdjustPairVerticalBlock;
export { AdjustPairVerticalBlock };

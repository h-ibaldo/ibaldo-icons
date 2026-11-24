import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AdjustPairBlockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AdjustPairBlock: ForwardRefExoticComponent<AdjustPairBlockProps & RefAttributes<Svg>>;

export default AdjustPairBlock;
export { AdjustPairBlock };

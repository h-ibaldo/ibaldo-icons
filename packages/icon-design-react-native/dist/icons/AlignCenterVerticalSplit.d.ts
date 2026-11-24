import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlignCenterVerticalSplitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlignCenterVerticalSplit: ForwardRefExoticComponent<AlignCenterVerticalSplitProps & RefAttributes<Svg>>;

export default AlignCenterVerticalSplit;
export { AlignCenterVerticalSplit };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlignCenterHorizontalSplitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlignCenterHorizontalSplit: ForwardRefExoticComponent<AlignCenterHorizontalSplitProps & RefAttributes<Svg>>;

export default AlignCenterHorizontalSplit;
export { AlignCenterHorizontalSplit };

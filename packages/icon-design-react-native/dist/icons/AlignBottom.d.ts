import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlignBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlignBottom: ForwardRefExoticComponent<AlignBottomProps & RefAttributes<Svg>>;

export default AlignBottom;
export { AlignBottom };

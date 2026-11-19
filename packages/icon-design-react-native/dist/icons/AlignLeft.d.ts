import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlignLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlignLeft: ForwardRefExoticComponent<AlignLeftProps & RefAttributes<Svg>>;

export default AlignLeft;
export { AlignLeft };

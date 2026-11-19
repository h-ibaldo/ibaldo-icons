import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BackspaceCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BackspaceCompact: ForwardRefExoticComponent<BackspaceCompactProps & RefAttributes<Svg>>;

export default BackspaceCompact;
export { BackspaceCompact };

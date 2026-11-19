import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BackspaceProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Backspace: ForwardRefExoticComponent<BackspaceProps & RefAttributes<Svg>>;

export default Backspace;
export { Backspace };

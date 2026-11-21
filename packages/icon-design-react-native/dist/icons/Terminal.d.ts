import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TerminalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Terminal: ForwardRefExoticComponent<TerminalProps & RefAttributes<Svg>>;

export default Terminal;
export { Terminal };

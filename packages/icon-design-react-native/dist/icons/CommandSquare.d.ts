import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CommandSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CommandSquare: ForwardRefExoticComponent<CommandSquareProps & RefAttributes<Svg>>;

export default CommandSquare;
export { CommandSquare };

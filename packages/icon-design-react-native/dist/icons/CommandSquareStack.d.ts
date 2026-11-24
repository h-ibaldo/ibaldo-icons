import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CommandSquareStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CommandSquareStack: ForwardRefExoticComponent<CommandSquareStackProps & RefAttributes<Svg>>;

export default CommandSquareStack;
export { CommandSquareStack };

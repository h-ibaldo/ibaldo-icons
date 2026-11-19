import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CommandSquareShadowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CommandSquareShadow: ForwardRefExoticComponent<CommandSquareShadowProps & RefAttributes<Svg>>;

export default CommandSquareShadow;
export { CommandSquareShadow };

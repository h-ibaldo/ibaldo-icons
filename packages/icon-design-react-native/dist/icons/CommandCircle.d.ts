import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CommandCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CommandCircle: ForwardRefExoticComponent<CommandCircleProps & RefAttributes<Svg>>;

export default CommandCircle;
export { CommandCircle };

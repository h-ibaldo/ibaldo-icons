import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandMoveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandMove: ForwardRefExoticComponent<HandMoveProps & RefAttributes<Svg>>;

export default HandMove;
export { HandMove };

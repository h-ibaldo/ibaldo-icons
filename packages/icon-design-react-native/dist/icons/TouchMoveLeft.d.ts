import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchMoveLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchMoveLeft: ForwardRefExoticComponent<TouchMoveLeftProps & RefAttributes<Svg>>;

export default TouchMoveLeft;
export { TouchMoveLeft };

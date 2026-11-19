import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchMoveRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchMoveRight: ForwardRefExoticComponent<TouchMoveRightProps & RefAttributes<Svg>>;

export default TouchMoveRight;
export { TouchMoveRight };

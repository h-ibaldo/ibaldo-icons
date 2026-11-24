import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchMoveUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchMoveUp: ForwardRefExoticComponent<TouchMoveUpProps & RefAttributes<Svg>>;

export default TouchMoveUp;
export { TouchMoveUp };

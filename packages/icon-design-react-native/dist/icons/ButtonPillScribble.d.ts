import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ButtonPillScribbleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ButtonPillScribble: ForwardRefExoticComponent<ButtonPillScribbleProps & RefAttributes<Svg>>;

export default ButtonPillScribble;
export { ButtonPillScribble };

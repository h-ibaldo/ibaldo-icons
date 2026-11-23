import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextWCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextWCircle: ForwardRefExoticComponent<TextWCircleProps & RefAttributes<Svg>>;

export default TextWCircle;
export { TextWCircle };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextQProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextQ: ForwardRefExoticComponent<TextQProps & RefAttributes<Svg>>;

export default TextQ;
export { TextQ };

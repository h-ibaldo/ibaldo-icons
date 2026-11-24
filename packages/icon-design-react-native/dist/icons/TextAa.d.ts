import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAaProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAa: ForwardRefExoticComponent<TextAaProps & RefAttributes<Svg>>;

export default TextAa;
export { TextAa };

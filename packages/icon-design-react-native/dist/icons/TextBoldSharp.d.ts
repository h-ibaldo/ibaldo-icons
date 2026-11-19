import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextBoldSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextBoldSharp: ForwardRefExoticComponent<TextBoldSharpProps & RefAttributes<Svg>>;

export default TextBoldSharp;
export { TextBoldSharp };

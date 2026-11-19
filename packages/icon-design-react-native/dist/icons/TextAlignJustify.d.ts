import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAlignJustifyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAlignJustify: ForwardRefExoticComponent<TextAlignJustifyProps & RefAttributes<Svg>>;

export default TextAlignJustify;
export { TextAlignJustify };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextLetterSpacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextLetterSpacing: ForwardRefExoticComponent<TextLetterSpacingProps & RefAttributes<Svg>>;

export default TextLetterSpacing;
export { TextLetterSpacing };

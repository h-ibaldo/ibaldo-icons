import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAlignJustifyLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAlignJustifyLeft: ForwardRefExoticComponent<TextAlignJustifyLeftProps & RefAttributes<Svg>>;

export default TextAlignJustifyLeft;
export { TextAlignJustifyLeft };

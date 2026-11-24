import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAlignLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAlignLeft: ForwardRefExoticComponent<TextAlignLeftProps & RefAttributes<Svg>>;

export default TextAlignLeft;
export { TextAlignLeft };

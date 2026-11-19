import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAlignRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAlignRight: ForwardRefExoticComponent<TextAlignRightProps & RefAttributes<Svg>>;

export default TextAlignRight;
export { TextAlignRight };

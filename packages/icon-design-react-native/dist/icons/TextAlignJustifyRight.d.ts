import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAlignJustifyRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAlignJustifyRight: ForwardRefExoticComponent<TextAlignJustifyRightProps & RefAttributes<Svg>>;

export default TextAlignJustifyRight;
export { TextAlignJustifyRight };

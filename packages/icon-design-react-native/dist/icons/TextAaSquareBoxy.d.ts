import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAaSquareBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAaSquareBoxy: ForwardRefExoticComponent<TextAaSquareBoxyProps & RefAttributes<Svg>>;

export default TextAaSquareBoxy;
export { TextAaSquareBoxy };

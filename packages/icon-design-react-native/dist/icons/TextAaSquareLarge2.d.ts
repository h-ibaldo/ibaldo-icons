import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAaSquareLarge2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAaSquareLarge2: ForwardRefExoticComponent<TextAaSquareLarge2Props & RefAttributes<Svg>>;

export default TextAaSquareLarge2;
export { TextAaSquareLarge2 };

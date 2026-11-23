import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextWholeWordProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextWholeWord: ForwardRefExoticComponent<TextWholeWordProps & RefAttributes<Svg>>;

export default TextWholeWord;
export { TextWholeWord };

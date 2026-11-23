import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextLigatureProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextLigature: ForwardRefExoticComponent<TextLigatureProps & RefAttributes<Svg>>;

export default TextLigature;
export { TextLigature };

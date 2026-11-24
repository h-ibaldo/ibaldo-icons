import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextBoldProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextBold: ForwardRefExoticComponent<TextBoldProps & RefAttributes<Svg>>;

export default TextBold;
export { TextBold };

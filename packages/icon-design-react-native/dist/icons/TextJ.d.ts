import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextJProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextJ: ForwardRefExoticComponent<TextJProps & RefAttributes<Svg>>;

export default TextJ;
export { TextJ };

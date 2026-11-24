import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextQCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextQCircle: ForwardRefExoticComponent<TextQCircleProps & RefAttributes<Svg>>;

export default TextQCircle;
export { TextQCircle };

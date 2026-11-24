import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextTCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextTCircle: ForwardRefExoticComponent<TextTCircleProps & RefAttributes<Svg>>;

export default TextTCircle;
export { TextTCircle };

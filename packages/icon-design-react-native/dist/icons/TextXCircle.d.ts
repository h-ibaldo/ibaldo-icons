import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextXCircle: ForwardRefExoticComponent<TextXCircleProps & RefAttributes<Svg>>;

export default TextXCircle;
export { TextXCircle };

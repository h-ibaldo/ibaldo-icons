import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextACircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextACircleRound: ForwardRefExoticComponent<TextACircleRoundProps & RefAttributes<Svg>>;

export default TextACircleRound;
export { TextACircleRound };

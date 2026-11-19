import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextASquareRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextASquareRound: ForwardRefExoticComponent<TextASquareRoundProps & RefAttributes<Svg>>;

export default TextASquareRound;
export { TextASquareRound };

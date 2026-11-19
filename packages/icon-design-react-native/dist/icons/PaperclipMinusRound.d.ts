import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipMinusRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusRound: ForwardRefExoticComponent<PaperclipMinusRoundProps & RefAttributes<Svg>>;

export default PaperclipMinusRound;
export { PaperclipMinusRound };

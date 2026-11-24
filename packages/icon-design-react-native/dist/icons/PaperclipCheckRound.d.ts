import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCheckRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckRound: ForwardRefExoticComponent<PaperclipCheckRoundProps & RefAttributes<Svg>>;

export default PaperclipCheckRound;
export { PaperclipCheckRound };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipArrowUpRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipArrowUpRound: ForwardRefExoticComponent<PaperclipArrowUpRoundProps & RefAttributes<Svg>>;

export default PaperclipArrowUpRound;
export { PaperclipArrowUpRound };

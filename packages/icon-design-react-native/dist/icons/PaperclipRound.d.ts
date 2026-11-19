import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipRound: ForwardRefExoticComponent<PaperclipRoundProps & RefAttributes<Svg>>;

export default PaperclipRound;
export { PaperclipRound };

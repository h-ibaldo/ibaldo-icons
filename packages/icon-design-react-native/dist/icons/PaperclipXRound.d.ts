import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipXRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipXRound: ForwardRefExoticComponent<PaperclipXRoundProps & RefAttributes<Svg>>;

export default PaperclipXRound;
export { PaperclipXRound };

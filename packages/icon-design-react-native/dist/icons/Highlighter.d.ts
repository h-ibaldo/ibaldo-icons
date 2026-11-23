import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HighlighterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Highlighter: ForwardRefExoticComponent<HighlighterProps & RefAttributes<Svg>>;

export default Highlighter;
export { Highlighter };

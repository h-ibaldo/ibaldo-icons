import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HighlighterBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HighlighterBare: ForwardRefExoticComponent<HighlighterBareProps & RefAttributes<Svg>>;

export default HighlighterBare;
export { HighlighterBare };

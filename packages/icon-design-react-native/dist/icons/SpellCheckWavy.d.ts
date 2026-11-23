import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SpellCheckWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SpellCheckWavy: ForwardRefExoticComponent<SpellCheckWavyProps & RefAttributes<Svg>>;

export default SpellCheckWavy;
export { SpellCheckWavy };

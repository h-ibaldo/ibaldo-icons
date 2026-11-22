import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlignLeftBarsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlignLeftBars: ForwardRefExoticComponent<AlignLeftBarsProps & RefAttributes<Svg>>;

export default AlignLeftBars;
export { AlignLeftBars };

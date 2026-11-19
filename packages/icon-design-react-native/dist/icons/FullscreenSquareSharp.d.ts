import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FullscreenSquareSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FullscreenSquareSharp: ForwardRefExoticComponent<FullscreenSquareSharpProps & RefAttributes<Svg>>;

export default FullscreenSquareSharp;
export { FullscreenSquareSharp };

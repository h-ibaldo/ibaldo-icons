import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlignSquareCenterHorizontalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlignSquareCenterHorizontal: ForwardRefExoticComponent<AlignSquareCenterHorizontalProps & RefAttributes<Svg>>;

export default AlignSquareCenterHorizontal;
export { AlignSquareCenterHorizontal };

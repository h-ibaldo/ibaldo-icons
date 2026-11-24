import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextHollowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextHollow: ForwardRefExoticComponent<TextHollowProps & RefAttributes<Svg>>;

export default TextHollow;
export { TextHollow };

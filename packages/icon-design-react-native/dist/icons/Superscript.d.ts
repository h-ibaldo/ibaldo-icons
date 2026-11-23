import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SuperscriptProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Superscript: ForwardRefExoticComponent<SuperscriptProps & RefAttributes<Svg>>;

export default Superscript;
export { Superscript };

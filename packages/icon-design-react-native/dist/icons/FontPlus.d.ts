import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FontPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FontPlus: ForwardRefExoticComponent<FontPlusProps & RefAttributes<Svg>>;

export default FontPlus;
export { FontPlus };

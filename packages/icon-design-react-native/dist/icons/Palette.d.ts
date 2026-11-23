import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaletteProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Palette: ForwardRefExoticComponent<PaletteProps & RefAttributes<Svg>>;

export default Palette;
export { Palette };

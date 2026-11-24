import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwatchStackWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwatchStackWide: ForwardRefExoticComponent<SwatchStackWideProps & RefAttributes<Svg>>;

export default SwatchStackWide;
export { SwatchStackWide };

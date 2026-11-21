import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlugWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlugWide: ForwardRefExoticComponent<PlugWideProps & RefAttributes<Svg>>;

export default PlugWide;
export { PlugWide };

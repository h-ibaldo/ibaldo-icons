import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowBoltWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowBoltWide: ForwardRefExoticComponent<WindowBoltWideProps & RefAttributes<Svg>>;

export default WindowBoltWide;
export { WindowBoltWide };

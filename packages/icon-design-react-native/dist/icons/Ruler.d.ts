import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RulerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Ruler: ForwardRefExoticComponent<RulerProps & RefAttributes<Svg>>;

export default Ruler;
export { Ruler };

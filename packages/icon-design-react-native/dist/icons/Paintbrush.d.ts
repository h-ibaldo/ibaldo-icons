import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaintbrushProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Paintbrush: ForwardRefExoticComponent<PaintbrushProps & RefAttributes<Svg>>;

export default Paintbrush;
export { Paintbrush };

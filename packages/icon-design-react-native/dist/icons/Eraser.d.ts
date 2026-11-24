import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EraserProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Eraser: ForwardRefExoticComponent<EraserProps & RefAttributes<Svg>>;

export default Eraser;
export { Eraser };

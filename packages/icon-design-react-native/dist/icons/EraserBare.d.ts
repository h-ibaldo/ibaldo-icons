import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EraserBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EraserBare: ForwardRefExoticComponent<EraserBareProps & RefAttributes<Svg>>;

export default EraserBare;
export { EraserBare };

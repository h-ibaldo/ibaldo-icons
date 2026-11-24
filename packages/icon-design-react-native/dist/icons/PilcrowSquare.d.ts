import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PilcrowSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PilcrowSquare: ForwardRefExoticComponent<PilcrowSquareProps & RefAttributes<Svg>>;

export default PilcrowSquare;
export { PilcrowSquare };

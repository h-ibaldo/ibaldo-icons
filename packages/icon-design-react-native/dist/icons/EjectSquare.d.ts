import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EjectSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EjectSquare: ForwardRefExoticComponent<EjectSquareProps & RefAttributes<Svg>>;

export default EjectSquare;
export { EjectSquare };

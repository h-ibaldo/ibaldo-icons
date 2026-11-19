import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EjectDownSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EjectDownSquare: ForwardRefExoticComponent<EjectDownSquareProps & RefAttributes<Svg>>;

export default EjectDownSquare;
export { EjectDownSquare };

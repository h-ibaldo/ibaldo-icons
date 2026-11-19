import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinocularsSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BinocularsSquare: ForwardRefExoticComponent<BinocularsSquareProps & RefAttributes<Svg>>;

export default BinocularsSquare;
export { BinocularsSquare };

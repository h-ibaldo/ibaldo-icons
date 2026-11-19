import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinocularsCompactSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BinocularsCompactSquare: ForwardRefExoticComponent<BinocularsCompactSquareProps & RefAttributes<Svg>>;

export default BinocularsCompactSquare;
export { BinocularsCompactSquare };

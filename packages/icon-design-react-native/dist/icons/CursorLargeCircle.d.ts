import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorLargeCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorLargeCircle: ForwardRefExoticComponent<CursorLargeCircleProps & RefAttributes<Svg>>;

export default CursorLargeCircle;
export { CursorLargeCircle };

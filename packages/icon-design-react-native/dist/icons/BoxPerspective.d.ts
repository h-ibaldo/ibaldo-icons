import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxPerspectiveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxPerspective: ForwardRefExoticComponent<BoxPerspectiveProps & RefAttributes<Svg>>;

export default BoxPerspective;
export { BoxPerspective };

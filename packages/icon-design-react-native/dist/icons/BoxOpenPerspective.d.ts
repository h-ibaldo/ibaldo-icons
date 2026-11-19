import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxOpenPerspectiveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxOpenPerspective: ForwardRefExoticComponent<BoxOpenPerspectiveProps & RefAttributes<Svg>>;

export default BoxOpenPerspective;
export { BoxOpenPerspective };

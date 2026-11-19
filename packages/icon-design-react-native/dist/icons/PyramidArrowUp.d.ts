import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PyramidArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PyramidArrowUp: ForwardRefExoticComponent<PyramidArrowUpProps & RefAttributes<Svg>>;

export default PyramidArrowUp;
export { PyramidArrowUp };

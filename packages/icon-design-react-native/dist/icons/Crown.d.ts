import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CrownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Crown: ForwardRefExoticComponent<CrownProps & RefAttributes<Svg>>;

export default Crown;
export { Crown };

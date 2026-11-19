import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReplaceProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Replace: ForwardRefExoticComponent<ReplaceProps & RefAttributes<Svg>>;

export default Replace;
export { Replace };

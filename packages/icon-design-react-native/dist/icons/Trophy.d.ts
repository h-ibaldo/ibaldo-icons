import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrophyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Trophy: ForwardRefExoticComponent<TrophyProps & RefAttributes<Svg>>;

export default Trophy;
export { Trophy };

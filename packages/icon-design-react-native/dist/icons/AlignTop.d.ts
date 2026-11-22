import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlignTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlignTop: ForwardRefExoticComponent<AlignTopProps & RefAttributes<Svg>>;

export default AlignTop;
export { AlignTop };

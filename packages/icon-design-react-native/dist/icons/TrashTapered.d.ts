import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashTaperedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashTapered: ForwardRefExoticComponent<TrashTaperedProps & RefAttributes<Svg>>;

export default TrashTapered;
export { TrashTapered };

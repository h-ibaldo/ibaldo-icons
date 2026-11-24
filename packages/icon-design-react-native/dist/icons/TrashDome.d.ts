import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashDomeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashDome: ForwardRefExoticComponent<TrashDomeProps & RefAttributes<Svg>>;

export default TrashDome;
export { TrashDome };

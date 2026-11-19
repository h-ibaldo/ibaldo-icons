import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashEmptyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashEmpty: ForwardRefExoticComponent<TrashEmptyProps & RefAttributes<Svg>>;

export default TrashEmpty;
export { TrashEmpty };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashArrowUp: ForwardRefExoticComponent<TrashArrowUpProps & RefAttributes<Svg>>;

export default TrashArrowUp;
export { TrashArrowUp };

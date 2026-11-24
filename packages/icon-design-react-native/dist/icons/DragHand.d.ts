import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DragHandProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DragHand: ForwardRefExoticComponent<DragHandProps & RefAttributes<Svg>>;

export default DragHand;
export { DragHand };

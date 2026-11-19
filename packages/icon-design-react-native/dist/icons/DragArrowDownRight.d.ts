import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DragArrowDownRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DragArrowDownRight: ForwardRefExoticComponent<DragArrowDownRightProps & RefAttributes<Svg>>;

export default DragArrowDownRight;
export { DragArrowDownRight };

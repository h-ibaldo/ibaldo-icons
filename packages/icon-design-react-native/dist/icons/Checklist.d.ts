import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Checklist: ForwardRefExoticComponent<ChecklistProps & RefAttributes<Svg>>;

export default Checklist;
export { Checklist };

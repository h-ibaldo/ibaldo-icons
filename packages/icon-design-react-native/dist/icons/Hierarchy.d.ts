import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HierarchyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Hierarchy: ForwardRefExoticComponent<HierarchyProps & RefAttributes<Svg>>;

export default Hierarchy;
export { Hierarchy };

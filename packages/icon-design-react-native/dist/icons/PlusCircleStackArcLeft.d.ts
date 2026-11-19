import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlusCircleStackArcLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlusCircleStackArcLeft: ForwardRefExoticComponent<PlusCircleStackArcLeftProps & RefAttributes<Svg>>;

export default PlusCircleStackArcLeft;
export { PlusCircleStackArcLeft };

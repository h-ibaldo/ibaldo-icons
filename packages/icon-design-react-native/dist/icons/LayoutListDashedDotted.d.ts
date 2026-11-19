import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutListDashedDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutListDashedDotted: ForwardRefExoticComponent<LayoutListDashedDottedProps & RefAttributes<Svg>>;

export default LayoutListDashedDotted;
export { LayoutListDashedDotted };

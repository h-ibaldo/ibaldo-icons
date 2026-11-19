import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutListDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutListDashed: ForwardRefExoticComponent<LayoutListDashedProps & RefAttributes<Svg>>;

export default LayoutListDashed;
export { LayoutListDashed };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutListSymbolsDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutListSymbolsDashed: ForwardRefExoticComponent<LayoutListSymbolsDashedProps & RefAttributes<Svg>>;

export default LayoutListSymbolsDashed;
export { LayoutListSymbolsDashed };

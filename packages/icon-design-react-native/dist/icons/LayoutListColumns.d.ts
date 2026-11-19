import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutListColumnsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutListColumns: ForwardRefExoticComponent<LayoutListColumnsProps & RefAttributes<Svg>>;

export default LayoutListColumns;
export { LayoutListColumns };

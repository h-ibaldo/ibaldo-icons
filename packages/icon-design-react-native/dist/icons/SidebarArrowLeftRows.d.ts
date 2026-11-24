import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SidebarArrowLeftRowsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SidebarArrowLeftRows: ForwardRefExoticComponent<SidebarArrowLeftRowsProps & RefAttributes<Svg>>;

export default SidebarArrowLeftRows;
export { SidebarArrowLeftRows };

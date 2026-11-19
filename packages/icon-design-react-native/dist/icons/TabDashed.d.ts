import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabDashed: ForwardRefExoticComponent<TabDashedProps & RefAttributes<Svg>>;

export default TabDashed;
export { TabDashed };

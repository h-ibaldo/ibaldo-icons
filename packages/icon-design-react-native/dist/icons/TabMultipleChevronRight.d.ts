import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabMultipleChevronRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabMultipleChevronRight: ForwardRefExoticComponent<TabMultipleChevronRightProps & RefAttributes<Svg>>;

export default TabMultipleChevronRight;
export { TabMultipleChevronRight };

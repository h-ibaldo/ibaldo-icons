import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabMinusCircleStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabMinusCircleStep: ForwardRefExoticComponent<TabMinusCircleStepProps & RefAttributes<Svg>>;

export default TabMinusCircleStep;
export { TabMinusCircleStep };

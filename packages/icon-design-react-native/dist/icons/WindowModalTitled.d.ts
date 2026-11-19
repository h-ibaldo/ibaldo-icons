import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowModalTitledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowModalTitled: ForwardRefExoticComponent<WindowModalTitledProps & RefAttributes<Svg>>;

export default WindowModalTitled;
export { WindowModalTitled };

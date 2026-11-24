import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StartMenuProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StartMenu: ForwardRefExoticComponent<StartMenuProps & RefAttributes<Svg>>;

export default StartMenu;
export { StartMenu };

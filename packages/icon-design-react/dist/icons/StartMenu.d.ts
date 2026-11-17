import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StartMenuProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StartMenu: ForwardRefExoticComponent<StartMenuProps & RefAttributes<SVGSVGElement>>;

export default StartMenu;
export { StartMenu };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindow2DotsMenuProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindow2DotsMenu: ForwardRefExoticComponent<ApplicationWindow2DotsMenuProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindow2DotsMenu;
export { ApplicationWindow2DotsMenu };

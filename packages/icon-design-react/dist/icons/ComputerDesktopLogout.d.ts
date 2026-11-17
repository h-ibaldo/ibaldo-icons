import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ComputerDesktopLogoutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ComputerDesktopLogout: ForwardRefExoticComponent<ComputerDesktopLogoutProps & RefAttributes<SVGSVGElement>>;

export default ComputerDesktopLogout;
export { ComputerDesktopLogout };

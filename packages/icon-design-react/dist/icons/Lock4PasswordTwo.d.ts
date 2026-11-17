import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock4PasswordTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock4PasswordTwo: ForwardRefExoticComponent<Lock4PasswordTwoProps & RefAttributes<SVGSVGElement>>;

export default Lock4PasswordTwo;
export { Lock4PasswordTwo };

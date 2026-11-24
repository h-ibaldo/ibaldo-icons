import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SupportProfileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SupportProfile: ForwardRefExoticComponent<SupportProfileProps & RefAttributes<SVGSVGElement>>;

export default SupportProfile;
export { SupportProfile };

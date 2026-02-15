import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock4EyePrivacyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock4EyePrivacy: ForwardRefExoticComponent<Lock4EyePrivacyProps & RefAttributes<SVGSVGElement>>;

export default Lock4EyePrivacy;
export { Lock4EyePrivacy };

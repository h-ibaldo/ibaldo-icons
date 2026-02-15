import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock5EyePrivacyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock5EyePrivacy: ForwardRefExoticComponent<Lock5EyePrivacyProps & RefAttributes<SVGSVGElement>>;

export default Lock5EyePrivacy;
export { Lock5EyePrivacy };

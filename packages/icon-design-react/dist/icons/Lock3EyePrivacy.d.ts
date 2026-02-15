import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock3EyePrivacyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock3EyePrivacy: ForwardRefExoticComponent<Lock3EyePrivacyProps & RefAttributes<SVGSVGElement>>;

export default Lock3EyePrivacy;
export { Lock3EyePrivacy };

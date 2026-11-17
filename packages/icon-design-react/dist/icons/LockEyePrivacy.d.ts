import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockEyePrivacyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockEyePrivacy: ForwardRefExoticComponent<LockEyePrivacyProps & RefAttributes<SVGSVGElement>>;

export default LockEyePrivacy;
export { LockEyePrivacy };

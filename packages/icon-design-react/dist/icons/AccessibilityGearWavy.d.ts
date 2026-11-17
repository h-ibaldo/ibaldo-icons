import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilityGearWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilityGearWavy: ForwardRefExoticComponent<AccessibilityGearWavyProps & RefAttributes<SVGSVGElement>>;

export default AccessibilityGearWavy;
export { AccessibilityGearWavy };

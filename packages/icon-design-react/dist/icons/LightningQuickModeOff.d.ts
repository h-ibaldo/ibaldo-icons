import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightningQuickModeOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightningQuickModeOff: ForwardRefExoticComponent<LightningQuickModeOffProps & RefAttributes<SVGSVGElement>>;

export default LightningQuickModeOff;
export { LightningQuickModeOff };

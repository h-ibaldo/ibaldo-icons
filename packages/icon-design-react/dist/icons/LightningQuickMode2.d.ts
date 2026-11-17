import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightningQuickMode2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightningQuickMode2: ForwardRefExoticComponent<LightningQuickMode2Props & RefAttributes<SVGSVGElement>>;

export default LightningQuickMode2;
export { LightningQuickMode2 };

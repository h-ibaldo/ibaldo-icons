import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DraftingCompassProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DraftingCompass: ForwardRefExoticComponent<DraftingCompassProps & RefAttributes<SVGSVGElement>>;

export default DraftingCompass;
export { DraftingCompass };

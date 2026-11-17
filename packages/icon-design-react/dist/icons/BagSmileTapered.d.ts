import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BagSmileTaperedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BagSmileTapered: ForwardRefExoticComponent<BagSmileTaperedProps & RefAttributes<SVGSVGElement>>;

export default BagSmileTapered;
export { BagSmileTapered };

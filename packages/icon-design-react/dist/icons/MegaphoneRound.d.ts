import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MegaphoneRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MegaphoneRound: ForwardRefExoticComponent<MegaphoneRoundProps & RefAttributes<SVGSVGElement>>;

export default MegaphoneRound;
export { MegaphoneRound };

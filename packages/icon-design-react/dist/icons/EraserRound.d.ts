import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EraserRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EraserRound: ForwardRefExoticComponent<EraserRoundProps & RefAttributes<SVGSVGElement>>;

export default EraserRound;
export { EraserRound };

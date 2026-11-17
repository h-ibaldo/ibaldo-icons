import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ContinuousShootingBurstLiveViewProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ContinuousShootingBurstLiveView: ForwardRefExoticComponent<ContinuousShootingBurstLiveViewProps & RefAttributes<SVGSVGElement>>;

export default ContinuousShootingBurstLiveView;
export { ContinuousShootingBurstLiveView };

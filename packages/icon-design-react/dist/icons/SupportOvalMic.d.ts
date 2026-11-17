import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SupportOvalMicProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SupportOvalMic: ForwardRefExoticComponent<SupportOvalMicProps & RefAttributes<SVGSVGElement>>;

export default SupportOvalMic;
export { SupportOvalMic };

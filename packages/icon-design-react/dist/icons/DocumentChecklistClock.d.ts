import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentChecklistClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentChecklistClock: ForwardRefExoticComponent<DocumentChecklistClockProps & RefAttributes<SVGSVGElement>>;

export default DocumentChecklistClock;
export { DocumentChecklistClock };

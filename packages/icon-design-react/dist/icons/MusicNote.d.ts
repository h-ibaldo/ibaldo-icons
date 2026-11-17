import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicNoteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MusicNote: ForwardRefExoticComponent<MusicNoteProps & RefAttributes<SVGSVGElement>>;

export default MusicNote;
export { MusicNote };
